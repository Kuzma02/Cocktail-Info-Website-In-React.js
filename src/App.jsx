import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient)
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        loader: singleProductLoader(queryClient)
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction // dodajemo action metod
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};
export default App;
