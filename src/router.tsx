import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BarMobile from "./pages/BarMobile.tsx";
import AtelierCocktail from "./pages/AtelierCocktail.tsx";
import AtelierDegustation from "./pages/AtelierDegustation.tsx";
import Partners from "./pages/Parteners.tsx";
import Contact from "./pages/Contact.tsx";
import ConfirmationPage from "./pages/gg";

export const paths = {
  // * Empty route
  EMPTY: "",
  NONE: "*",

  // * Main route
  HOME: "/",
  BARMOBILE: "/barmobile",
  AtelierCocktail: "/ateliercocktail",
  AtelierDegustation: "/atelierdegustation",
  Partners: "/partners",
  Contact: "/contact",
  gg: "/success",
} as const;

export const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <Home />,
  },

  {
    path: paths.BARMOBILE,
    element: <BarMobile />,
  },

  {
    path: paths.AtelierCocktail,
    element: <AtelierCocktail />,
  },

  {
    path: paths.AtelierDegustation,
    element: <AtelierDegustation />,
  },

  {
    path: paths.Partners,
    element: <Partners />,
  },

  {
    path: paths.Contact,
    element: <Contact />,
  },

  {
    path: paths.gg,
    element: <ConfirmationPage />,
  },

  {
    path: paths.NONE || paths.EMPTY,
    element: <Navigate to={paths.HOME} />,
  },
]);
