import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes.jsx';
import Provider from './private/Provider';
const router = createBrowserRouter(Routes);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
