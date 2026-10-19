import React, { useEffect, useRef, useState } from "react";

const WIDGETS_SRC = "https://platform.x.com/widgets.js";
// X's empty states ("Nothing to see here", login prompts) render shorter than this.
const MIN_TIMELINE_HEIGHT = 300;
const LOAD_TIMEOUT_MS = 10000;
const SETTLE_MS = 1500;

let widgetsPromise;

const loadWidgets = () => {
  if (window.twttr?.widgets) return Promise.resolve(window.twttr);
  widgetsPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WIDGETS_SRC;
    script.async = true;
    script.charset = "utf-8";
    script.onload = () =>
      window.twttr?.ready ? window.twttr.ready(resolve) : reject(new Error("X widgets unavailable"));
    script.onerror = () => {
      widgetsPromise = undefined;
      reject(new Error("X widgets blocked"));
    };
    document.body.appendChild(script);
  });
  return widgetsPromise;
};

// Live X profile timeline. Shows `fallback` until the timeline has actually
// rendered posts, and keeps showing it if X fails, is blocked, or comes back empty.
const XTimeline = ({ username, fallback }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | failed

  useEffect(() => {
    const container = containerRef.current;
    let done = false;
    const finish = (next) => {
      if (done) return;
      done = true;
      clearTimeout(timeout);
      setStatus(next);
    };
    const timeout = setTimeout(() => finish("failed"), LOAD_TIMEOUT_MS);

    loadWidgets()
      .then((twttr) =>
        twttr.widgets.createTimeline({ sourceType: "profile", screenName: username }, container, {
          chrome: "noheader nofooter noborders transparent",
          dnt: true,
        })
      )
      .then((el) => {
        // Give the iframe a moment to size itself before judging whether it has posts.
        setTimeout(() => {
          finish(el && el.offsetHeight >= MIN_TIMELINE_HEIGHT ? "ready" : "failed");
        }, SETTLE_MS);
      })
      .catch(() => finish("failed"));

    return () => {
      done = true;
      clearTimeout(timeout);
      container.innerHTML = "";
    };
  }, [username]);

  return (
    <div className="relative">
      {/* Rendered invisibly while loading so the iframe can lay out and be measured. */}
      <div
        ref={containerRef}
        aria-hidden={status !== "ready"}
        className={
          status === "ready"
            ? ""
            : status === "loading"
              ? "absolute inset-x-0 top-0 invisible pointer-events-none"
              : "hidden"
        }
      />
      {status !== "ready" && fallback}
    </div>
  );
};

export default XTimeline;
