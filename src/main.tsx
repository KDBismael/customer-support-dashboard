import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ExcludeRoute from './components/exclude-route';
import PrivateRoute from './components/private-route';
import './index.css';
import { DashBoard } from './pages/dashboard';
import { Login } from './pages/login';
import { TicketDetails } from './pages/ticket-details';
import { Tickets } from './pages/tickets';

const router = createBrowserRouter([
  { path: '/login', element: <ExcludeRoute>{<Login />}</ExcludeRoute> },
  {
    path: "/",
    element: <PrivateRoute>{<App />}</PrivateRoute>,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: 'tickets/id',
        element: <TicketDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
