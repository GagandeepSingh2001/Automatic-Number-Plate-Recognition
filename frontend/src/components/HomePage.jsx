import video from "../assets/video.mp4";
import img from "../assets/img.jpg";
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../contexts/AuthContext";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HomePage = () => {

const {isAuthenticated} = useAuth0();
const {userLoggedIn} = useAuth();

  return (
    <div id="home" className="flex items-center border-b border-neutral-800 mt-5 pb-5 h-fit min-h-[700px] overflow-clip">
      {/* Left Side */}
          <div className="relative w-full h-full top-8 lg:basis-1/2 place-items-center justify-center">
            <h1 className="title text-5xl tracking-wide w-full text-center">
                Automatic Number <span className="block bg-gradient-to-r from-orange-700 to-red-800 text-transparent p-2 bg-clip-text">Plate Recognition</span>
            </h1>

            <p className="mt-5 text-lg text-neutral-600 text-pretty rounded-xl p-2 text-center">Welcome to our Number Plate Recognition website! Our platform uses advanced OCR technology to identify and track vehicles across cities. It enhances traffic management, security, and operations in toll collection, parking, and law enforcement by ensuring real-time accuracy and compliance.
            </p>  

              <div className="relative w-full h-fit flex justify-center gap-5 p-4">
                <img src={img} alt="Image" className="w-1/2 max-w-[300px] rounded-lg shadow-lg z-20" />
                <video autoPlay loop muted className="w-1/2 max-w-[300px] rounded-lg shadow-lg z-10">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video format.
                </video>
              </div>

              <div className="my-10 flex w-fit justify-center text-center">
                { userLoggedIn || isAuthenticated ? <></> : <NavLink to ="/Register" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Start for free</NavLink>}
                {/* Auth0 authenticated */}
                {isAuthenticated && <NavLink to ="/Search" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Image</NavLink>}
                {isAuthenticated && <NavLink to ="/SearchText" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Text</NavLink>}
                {isAuthenticated && <NavLink to ="/SearchCam" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Camera</NavLink>}

                {/* Firebase authenticated */}
                { userLoggedIn ? <NavLink to ="/Search" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Image</NavLink> : <></>}
                { userLoggedIn ? <NavLink to ="/SearchText" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Text</NavLink> : <></>}
                {userLoggedIn && <NavLink to ="/SearchCam" className="bg-gradient-to-r m-2 w-fit from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md cursor-pointer">Search Using Camera</NavLink>}
              </div>

          </div>
      
      {/* Right Side  */}
          <div className="basis-1/2 hidden lg:block place-items-center">
          <DotLottieReact
          className="w-[clamp(10vw, 5vw, 25vw)] ml-20"
            src="https://lottie.host/c27e6752-6ea0-4d7a-9da1-49d872c76b6f/pwIzERgVR5.lottie"
            loop
            autoplay/>

        <span className="grid grid-cols-2">
          <DotLottieReact
            className="w-[clamp(10vw, 5vw, 35vw)]"
            src="https://lottie.host/5a188b2a-f813-4bea-adf7-7556003ee311/zyfRA6DNYL.lottie"
            loop
            autoplay/>

          <DotLottieReact
          className="w-[clamp(10vw, 5vw, 22vw)]"
            src="https://lottie.host/4b12ac37-5b78-4653-ae21-5173743abe18/kpytkbqbT3.lottie"
            loop
            autoplay/>
          </span>

          </div>

        <ScrollToTop className="px-1 bg-transparent" smooth color="orange"/>
    </div>
  )
}

export default HomePage