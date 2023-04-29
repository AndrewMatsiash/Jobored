import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Layout from './components/Layout';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { JobPage } from './pages/JobPage/JobPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/searchPage" index element={<SearchPage />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
