// import React from 'react';

// const XTimeline = () => {
//   return (
//     <div className="w-full max-w-[520px] mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
//       {/* Fallback message while loading */}
//       <div className="flex items-center justify-center h-64 text-gray-400">
//         Loading recent posts from @sushilpokhrel...
//       </div>

//       {/* The official embedded timeline */}
//       <a
//         className="twitter-timeline block"
//         href="https://twitter.com/sushilpokhrel"
//         data-lang="en"
//         data-theme="dark"
//         data-width="100%"
//         data-height="600"               // adjust as needed
//         data-chrome="noheader nofooter noborders transparent"
//         data-tweet-limit="10"           // optional: limit visible tweets
//         data-aria-polite="assertive"
//       >
//         Tweets by @sushilpokhrel
//       </a>
//     </div>
//   );
// };

// export default XTimeline;



// **OR


import React, { useEffect, useRef } from 'react';

const XTimeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadTimeline = () => {
      if (window.twttr?.widgets?.createTimeline) {
        window.twttr.widgets
          .createTimeline(
            {
              sourceType: 'profile',
              screenName: 'sushilpokhrel',  // your username without @
            },
            containerRef.current,
            {
              height: 600,
              theme: 'dark',
              chrome: 'noheader nofooter noborders transparent',
              tweetLimit: 10,
            }
          )
          .then(() => console.log('Timeline loaded'))
          .catch(err => console.error('Timeline error:', err));
      }
    };

    if (window.twttr?.ready) {
      loadTimeline();
    } else {
      window.twttr = window.twttr || [];
      window.twttr.ready = loadTimeline;
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[520px] mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
      style={{ minHeight: '600px' }}
    >
      <div className="flex items-center justify-center h-64 text-gray-400">
        Loading recent posts...
      </div>
    </div>
  );
};

export default XTimeline;