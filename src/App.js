import './App.css';
import NotFountPage from './pages/404/NotFountPage';
import HomePage from './pages/home/HomePage';
import ContactPage from './pages/contact/ContactPage';
import {  createBrowserRouter,
  RouterProvider,Navigate
} from "react-router-dom";
import ProjectPage from './pages/project/projectPage';
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>,
  },
  
  {
    path: "/projects",
    element: <ProjectPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  }
  ,
  {
    path: "/404",
    element: <NotFountPage/>,
  },
  {
    path: "/home/*",
    element: <Navigate to="/404"/>,
  },
  {
    path: "/*",
    element: <Navigate to="/home"/>,
  },

]);

function App() {
  return (
    <div >
    <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
