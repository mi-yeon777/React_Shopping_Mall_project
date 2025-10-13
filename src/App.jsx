import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "@/layouts/GlobalLayout";

import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import NotFound from "@/pages/NotFound";
import SampleHome from "@/samples/SampleHome";
import SampleProductDetail from "@/samples/SampleProductDetail";
import SampleProductList from "@/samples/SampleProductList";
import SampleStore from "@/samples/SampleStore";
import SampleCart from "@/samples/SampleCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shopping/cart", element: <ShoppingCart /> },
      { path: "sample-home", element: <SampleHome /> },
      { path: "sample-product-detail", element: <SampleProductDetail /> },
      { path: "sample-product-list", element: <SampleProductList /> },
      { path: "sample-store", element: <SampleStore /> },
      { path: "sample-cart", element: <SampleCart /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
