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
// const ComingSoon = lazy(() => import("./components/ComingSoon/ComingSoon"))
const E11 = lazy(() => import("./components/Events/enchantedEnsemble"))
const E12 = lazy(() => import("./components/Events/sorcerousSolo"))
const E3 = lazy(() => import("./components/Events/westernMystique"))
const E4 = lazy(() => import("./components/Events/mayhemShowdown"))
const E5 = lazy(() => import("./components/Events/mridangam"))
const E6 = lazy(() => import("./components/Events/rhythmicWizardry"))
const E7 = lazy(() => import("./components/Events/mythicon"))
const E8 = lazy(() => import("./components/Events/artisticOdyssey"))
const E9 = lazy(() => import("./components/Events/spellboundSagas"))
const E10 = lazy(() => import("./components/Events/fantasiaFlicks"))
const E2 = lazy(() => import("./components/Events/enchantedLegends"))
const E1 = lazy(() => import("./components/Events/mysticalControversy"))
const Registration = lazy(() => import("./components/Form/parts/Registration"))
const MultiRegs = lazy(() => import("./components/Form/parts/MultiRegs"))
// const Grab = lazy(()=>import("./components/Grab/Grab"))


const appRouter = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/grab",
    element: <Grab />
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/events/eventsRegSingle",
    element: <Registration/>
  },
  {
    path: "/events/eventsRegMulti",
    element: <MultiRegs/>
  },
  {
    path: "/events/mystical_controversy",
    element: <E1 />
  },
  {
    path: "/events/enchanted_legends",
    element: <E2 />
  },
  {
    path: "/events/enchanted_ensemble",
    element: <E11 />
  },
  {
    path: "/events/sorcerous_solo",
    element: <E12 />
  },
  {
    path: "/events/western_mystique",
    element: <E3 />
  },
  {
    path: "/events/mayhem_showdown",
    element: <E4 />
  },
  {
    path: "/events/mridangam",
    element: <E5 />
  },
  {
    path: "/events/rhythmic_wizardry",
    element: <E6 />
  },
  {
    path: "/events/mythicon",
    element: <E7 />
  },
  {
    path: "/events/artistic_odyssey",
    element: <E8 />
  },
  {
    path: "/events/spellbound_sagas",
    element: <E9 />
  },
  {
    path: "/events/fantasia_flicks",
    element: <E10 />
  },
  
 
]

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {appRouter.map((item) => {
              console.log(item)
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
