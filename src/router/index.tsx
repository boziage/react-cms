import { lazy, Suspense } from "react";

import App from "../App";

const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/page1"));
const Page2 = lazy(() => import("../views/Page2"));

import { BrowserRouter, Navigate } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// function Router() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

const withLoadingComponent = (comp: JSX.Element) => (
  <Suspense fallback={<div>Loading...</div>}>{comp}</Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: withLoadingComponent(<Home />),
  // },
  // {
  //   path: "/about",
  //   element: withLoadingComponent(<About />),
  // },
];

export { Router, routes };
