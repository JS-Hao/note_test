import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styled';
import { Home, Note, NoteLoader } from './views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/note/:noteId',
    element: <Note />,
    loader: NoteLoader,
  },
]);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
