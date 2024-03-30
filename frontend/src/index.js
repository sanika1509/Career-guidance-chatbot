import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Chat from "./chat/Chat";
import ChatLists from "./chatLists/chatLists";
const root = ReactDOM.createRoot(document.getElementById("root"));
import Navbar from './Navbar';

const router = createBrowserRouter([
  {
    path: "*",
    element : <Chat />,
  },
  {
    path : "chat",
    element : <Chat />,
  },
  {
    path : "chatlist",
    element : <ChatLists />
  }
]);

root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
