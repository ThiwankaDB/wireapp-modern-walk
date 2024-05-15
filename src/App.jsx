import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Loading from './components/Loading';

import routes from './helpers/routes';

// Define lazy loaded components
const Layout = lazy(() => import('./components/Layout'));
const Homepage = lazy(() => import('./containers/Homepage'));
const CategoryPage = lazy(() => import('./containers/CategoryPage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Wrap routes with Suspense for code splitting and loading fallback */}
      <Routes>
        {/* Define routes for the application */}
        <Route path={routes.ROOT} element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={routes.CATEGORY_PAGE.MEN} element={<CategoryPage isMen />} />
          <Route path={routes.CATEGORY_PAGE.WOMEN} element={<CategoryPage />} />
          <Route path={routes.OTHER} element={<Navigate to={routes.HOME_PAGE} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
