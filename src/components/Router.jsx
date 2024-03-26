import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Homepage';
import ErrorPage from './ErrorPage';
import Layout from './Layout';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
