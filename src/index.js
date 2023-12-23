import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Loading from './Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = lazy(() => import("./App"))
const Home = lazy(() => import("./components/Home/Home"))
const Events = lazy(() => import("./components/Events/Events"))
const Gallery = lazy(() => import("./components/Gallery/Gallery"))
const ComingSoon = lazy(() => import("./components/ComingSoon/ComingSoon"))
const E1 = lazy(() => import("./components/Events/E1"))
const EventReg= lazy(()=> import("./components/EventReg/EventReg"))

const appRouter = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/events",
    element: <ComingSoon />,
  },
  {
    path: "/grab",
    element: <ComingSoon />
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/events/1",
    element: <E1 />
  },
  {
    path: "/events/eventsReg",
    element: <EventReg />
  }
]

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {appRouter.map((item) => {
              return (
                <Route path={item.path} element={item.element} />
              )
            })}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>
);
