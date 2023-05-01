import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { userLoader } from './loaders/userLoader';
import { Home } from './pages/Home';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    error: () => {
      return <div>Erro</div>;
    },
    children: [
      {
        path: '/',
        loader: userLoader,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <Home />,
      },
    ],
  },
]);
