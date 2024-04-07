import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.jsx';
import Homepage from './pages/homepage.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PublicRoutes from './component/PublicRoutes.jsx';
import PrivateRoutes from './component/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    element: <PublicRoutes/>,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
    ]
  },
  {
    element: <PrivateRoutes/>,
    children: [
      {
        path: "/homepage",
        element: <Homepage/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
