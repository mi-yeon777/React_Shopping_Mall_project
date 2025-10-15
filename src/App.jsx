// src/App.jsx
import React, { Suspense, lazy } from "react";
import AppMDXProvider from "@/providers/MDXProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "@/layouts/GlobalLayout";

const SampleHome = lazy(() => import("@/samples/SampleHome"));
const SampleProductDetail = lazy(() => import("@/samples/SampleProductDetail"));
const SampleProductList = lazy(() => import("@/samples/SampleProductList"));
const SampleCart = lazy(() => import("@/samples/SampleCart"));
const SampleStore = lazy(() => import("@/samples/SampleStore"));

import Home from "@/pages/Home";
import DocBySlug from "@/pages/DocBySlug";

import TestList from "./test/TestList"; //test 경로용
import TestDetail from "./test/TestDetail"; //test 자식경로 /test/list

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

const router = createBrowserRouter([
  {
    path: "docs",
    children: [
      { index: true, element: <DocBySlug slug="Intro" /> },
      { path: "*", element: <DocBySlug /> },
    ],
  },
  //test 조회용
  {
    path: "test",
    children: [
      {
        path: "list",
        element: <TestList />,
      },
      {
        //변할 수 있는 변수 자리(파라미터)
        path: "detail/:id",
        element: <TestDetail />,
      },
    ],
  },
  {
    path: "/",
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

      {
        path: "sample",
        children: [
          {
            path: "SampleHome",
            element: <SampleHome />,
          },
          {
            path: "SampleProductDetail",
            element: <SampleProductDetail />,
          },
          {
            path: "SampleProductList",
            element: <SampleProductList />,
          },
          {
            path: "SampleCart",
            element: <SampleCart />,
          },
          {
            path: "SampleStore",
            element: <SampleStore />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AppMDXProvider>
      <Suspense fallback={<div className="p-6">로딩중…</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AppMDXProvider>
  );
}

export default App;
