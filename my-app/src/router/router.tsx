import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { JobPage } from '../pages/JobPage/JobPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path="/job/:id" element={<JobPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
);

export default router;
