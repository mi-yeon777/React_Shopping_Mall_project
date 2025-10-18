import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      //{ path: "products", element: <ProductList /> },
      //{ path: "products/women", element: <ProductList /> },
      //products/women... 대신 묶어서
      { path: "products", element: <ProductList /> },
      { path: "products/:category", element: <ProductList /> },
      { path: "products/detail/:id", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
