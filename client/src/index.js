import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';
import StuLogin from './components/StuLogin';
import Academics from './components/Academics';
import Clubs from './components/Clubs';
import StuHome from './components/StuHome';
import FacultyHome from './components/FacultyHome';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import FacultyLogin from './components/FacultyLogin';


const router = createBrowserRouter([
  {
    path: "/stulogin",
    element: (<StuLogin />)
  },{
      path: "/home",
      element: (<StuHome />)
  },{
    path: "/academics",
    element: (<Academics />)
  },{
    path: "/clubs",
    element: (<Clubs />)
  },{
    path: "/",
    element: (<App />)
  },{
    path: "/facultyhome",
    element: (<FacultyHome />)
  },{
    path: "/facultylogin",
    element: (<FacultyLogin/>)
  }])


const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<RouterProvider router={router} />)

