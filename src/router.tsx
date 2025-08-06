import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import App from './pages/App';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});
const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public-layout',
  path: '',
  component: () => <Outlet />,
});
const signInRoute = createRoute({
  path: '/',
  getParentRoute: () => publicLayoutRoute,
  component: App,
});
const routeTree = rootRoute.addChildren([
  publicLayoutRoute.addChildren([signInRoute]),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
