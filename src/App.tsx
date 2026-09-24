import type { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Services from './components/Services';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import About from './components/About';
import NotFound from './components/NotFound';
import { routes, type RouteMeta } from './routes';
import { usePageMeta } from './hooks/usePageMeta';
import { business } from './data/business';

function Page({ meta, children }: { meta: RouteMeta; children: ReactNode }) {
  usePageMeta(meta.title, meta.description, meta.path);
  return children;
}

const notFoundMeta: RouteMeta = {
  path: '/404',
  label: 'No encontrado',
  title: `Página no encontrada | ${business.name}`,
  description: 'La página que buscas no existe.',
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home.path} element={<Page meta={routes.home}><Home /></Page>} />
        <Route path={routes.about.path} element={<Page meta={routes.about}><About /></Page>} />
        <Route path={routes.services.path} element={<Page meta={routes.services}><Services /></Page>} />
        <Route path={routes.catalog.path} element={<Page meta={routes.catalog}><Catalog /></Page>} />
        <Route path={routes.reviews.path} element={<Page meta={routes.reviews}><Reviews /></Page>} />
        <Route path={routes.contact.path} element={<Page meta={routes.contact}><Contact /></Page>} />
        <Route path="*" element={<Page meta={notFoundMeta}><NotFound /></Page>} />
      </Route>
    </Routes>
  );
}

export default App;
