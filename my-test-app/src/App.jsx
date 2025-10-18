import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout.jsx"; //화면의 Home,women...
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      // { path: "products/women", element: <ProductList /> },
      // { path: "products/men", element: <ProductList /> },
      // { path: "products/kids", element: <ProductList /> },
      // { path: "products/new", element: <ProductList /> },
      // { path: "products/best", element: <ProductList /> },
      // { path: "products/detail/:id", element: <ProductDetail /> },
      //대신 카테고리로 묶어서
      { path: "products", element: <ProductList /> },
      { path: "products/:category", element: <ProductDetail /> },
      { path: "products/detail/:id", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
