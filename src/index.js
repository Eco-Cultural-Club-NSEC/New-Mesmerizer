import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Gallery from "./components/Gallery/Gallery";
import ComingSoon from './components/ComingSoon/ComingSoon'
import E1 from './components/Events/E1';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <ComingSoon/>,
      },
      {
        path: "/grab",
        element: <ComingSoon/>
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/events/1",
        element:<E1/>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);



reportWebVitals();
