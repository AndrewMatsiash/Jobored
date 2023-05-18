import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { JobPage } from '../pages/JobPage/JobPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { FAVORITE_PAGE, HOME_PAGE, JOB_PAGE } from '../constants/router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_PAGE} element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path={JOB_PAGE} element={<JobPage />} />
      <Route path={FAVORITE_PAGE} element={<FavoritesPage />} />
    </Route>
  )
);

export default router;
