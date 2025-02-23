import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Auth0Authenticator from './auth/Auth0Authenticator'
import LoginAuthenticator from './components/LoginAuthenticator.jsx'
import HomePage from './components/HomePage.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Form from './components/Form.jsx'
import Search from './components/Search.jsx'
import NavBar from './components/NavBar.jsx'
import SearchText from './components/SearchText.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { AuthProvider } from './contexts/AuthContext.jsx'
import SearchCam from './components/SearchCam.jsx'
import loader from './assets/loader.gif'


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
       <LoginAuthenticator/>
        {/* <NavBar /> */}
       <div className="max-w-7xl mx-auto pt-5 px-6">
        <HomePage />
        <FeaturesSection />
        <About />
        <Contact />
       </div>
        <Footer/>
      </>,
      // errorElement: <><div>404 NOT FOUND</div></>
  },
  {
    path: "/FeaturesSection",
    element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><FeaturesSection/></div></>
  },
  {
    path: "/About",
    element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><About/></div></>
  },
  {
    path: "/Contact",
    element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><Contact/></div></>
  },
  {
    path: "/Footer",
    element: <><NavBar /><div className="max-w-7xl mx-auto pt-5 px-6"><Footer/></div></>
  },
  {
    path: "/Register",
    element: <><div className="max-w-7xl mx-auto pt-5 px-6"><Form/></div></>
  },
  {
    path: "/Search",
    element: <><div className="max-w-7xl mx-auto pt-5 px-6"><Search/></div></>
  },
  {
    path: "/SearchText",
    element: <><div className="max-w-7xl mx-auto pt-5 px-6"><SearchText/></div></>
  },
  {
    path: "/SearchCam",
    element: <><div className="max-w-7xl mx-auto pt-5 px-6"><SearchCam/></div></>
  }
])



// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period, or wait until your page content is ready
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, stop the loading spinner
    }, 3000); // Adjust the delay as needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <AuthProvider>
        <Auth0Authenticator>
          {isLoading ? (
            // Show the loading gif when the page is loading
            <div className="grid place-items-center h-screen"><img src={loader}></img></div>
          ) : (
            // Render the RouterProvider only after loading is complete
            <RouterProvider router={router} basename="/" />
          )}
        </Auth0Authenticator>
      </AuthProvider>
      <Toaster richColors closeButton position="top-center" />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//     <Auth0Authenticator>
//     {/* <App /> */}
//     <RouterProvider router = {router} basename="/"/>
//     </Auth0Authenticator>
//     </AuthProvider>
//     <Toaster richColors closeButton position="top-center" />
//   </StrictMode>,
// )