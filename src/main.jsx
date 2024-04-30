import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/errorpage.jsx';
import About from './pages/about.jsx';
import Altass from './pages/altass.jsx';
import AltschoolProfileTemplate from './pages/altschootemplet.jsx';
import Assignment from './pages/ass.jsx';
import Assignmenttwo from './pages/asstwo.jsx';
import BlogCard from './pages/blog-card.jsx';
import Ethereum from './pages/ethereum.jsx';
import GitRepo from './pages/git-repo.jsx';
import GitText from './pages/git-text.jsx';
import Huckelberry from './pages/huckelberry.jsx';
import Listrepo from './pages/listrepo.jsx';
import Project2 from './pages/project2.jsx';
import Testing from './pages/testing.jsx';
import WebProject from './pages/web-project.jsx';
import Exam from './pages/exam.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/altschoolass",
    element: <Altass/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/altschool-profile-template",
    element: <AltschoolProfileTemplate/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/assignment",
    element: <Assignment/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/assignmenttwo",
    element: <Assignmenttwo/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/blog-card",
    element: <BlogCard/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/ethereum",
    element: <Ethereum/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/exam",
    element: <Exam/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/git-repo",
    element: <GitRepo/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/git-text",
    element: <GitText/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/huckelberry",
    element: <Huckelberry/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/listrepo",
    element: <Listrepo/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/project2",
    element: <Project2/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/testing",
    element: <Testing/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/web-projects",
    element: <WebProject/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
