import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";

const Home = lazy(() => import("@/pages/Home"));
const AuthJoin = lazy(() => import("@/pages/AuthJoin"));
const AuthLogin = lazy(() => import("@/pages/AuthLogin"));
/* 상품 */
const ProductList = lazy(() => import("@/pages/ProductList"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
/* 주문 */
const ShoppingCart = lazy(() => import("@/pages/ShoppingCart"));
const ShoppingOrder = lazy(() => import("@/pages/ShoppingOrder"));
/* 매장찾기 */
const Store = lazy(() => import("@/pages/Store"));
/* 404페이지 */
const NotFound = lazy(() => import("@/pages/NotFound"));

/* 샘플 */
const SampleHome = lazy(() => import("@/samples/SampleHome"));
const SampleProductDetail = lazy(() => import("@/samples/SampleProductDetail"));
const SampleProductList = lazy(() => import("@/samples/SampleProductList"));
const SampleStore = lazy(() => import("@/samples/SampleStore"));
const SampleCart = lazy(() => import("@/samples/SampleCart"));

const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products/detail/:id", element: <ProductDetail /> },
      { path: "products/:category", element: <ProductList /> },
      { path: "shopping/cart", element: <ShoppingCart /> },
      { path: "shopping/order", element: <ShoppingOrder /> },
      { path: "login", element: <AuthLogin /> },
      { path: "join", element: <AuthJoin /> },
      { path: "store", element: <Store /> },
      { path: "sample-product-detail", element: <SampleProductDetail /> },
      { path: "sample-product-list", element: <SampleProductList /> },
      { path: "sample-store", element: <SampleStore /> },
      { path: "sample-cart", element: <SampleCart /> },
      { path: "sample-home", element: <SampleHome /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
