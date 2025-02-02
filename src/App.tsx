import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css'
import { Home } from './components/Home';
import { Login } from './components/Login';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

