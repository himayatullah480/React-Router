import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Services from './Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
