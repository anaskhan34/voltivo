import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Hero } from "./pages/Hero";
import { MainLayout } from "./Components/MainLayout/MainLayout";
import { Products } from "./pages/Products";
import { SummaryCartSection } from "./Components/MainLayout/SummaryCartSec";
import { IndividualProduct } from "./pages/IndividualProduct";
import { About } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { OrderConfirm } from "./pages/OrderConfirmaion";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <IndividualProduct />,
        },
        {
          path: "/Summary",
          element: <SummaryCartSection />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/confirm-order",
          element: <OrderConfirm />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
