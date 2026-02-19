import googlescholar from "../assets/googlescholar.png"
 
 const GoogleScholarIcon = () => (
       <img
                        src={googlescholar}
                        alt="Sushil Sharma"
                        className="w-full h-full object-cover object-top 
                                 grayscale-[20%] 
                                 hover:grayscale-0 
                                 transition-all text-blue-600 duration-500 scale-105 hover:scale-100"
                        loading="eager"
                        style={{ width: "30px", height: "30px" }}
                      />
 )

export default GoogleScholarIcon;