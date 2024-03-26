import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Homepage';
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import LeaderboardPage from './LeaderboardPage';
import GameLeaderboard from './GameLeaderboard';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'leaderboard', element: <LeaderboardPage /> },
        { path: 'leaderboard/:game', element: <GameLeaderboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
