import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Homepage';
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import LeaderboardPage from './LeaderboardPage';
import GameLeaderboard from './GameLeaderboard';
import GamePage from './GamePage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'play', element: <GamePage /> },
        { path: 'leaderboard', element: <LeaderboardPage /> },
        { path: 'leaderboard/:game', element: <GameLeaderboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
