import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import ManageTeam from './Components/ManageTeam/ManageTeam.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Invoices from './Components/Invoices/Invoices.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Calendar from './Components/Calendar/Calendar.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Bar from './Components/Bar/Bar.jsx';
import Pie from './Components/Pie/Pie.jsx';
import Lina from './Components/Lina/Lina.jsx';
import Geography from './Components/Geography/Geography.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: '/', element: <Home />},
      {path: '/Team',element: <ManageTeam />},
      {path: '/Contact',element: <Contact />},
      {path: '/invoices',element: <Invoices />},
      {path: '/form',element: <Profile/>},
      {path: '/Calendar',element: <Calendar />},
      {path: '/faq',element: <FAQ/>},
      {path: '/Bar',element: <Bar/>},
      {path: '/Pie',element: <Pie/>},
      {path: '/lina',element: <Lina/>},
      {path: '/geography',element: <Geography/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
