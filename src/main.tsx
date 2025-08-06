import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { QueryProvider } from './context/QueryContext.tsx';
import { ActionTranslateProvider } from './context/actionTranslateContent.tsx';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ActionTranslateProvider>
        <RouterProvider router={router} />
      </ActionTranslateProvider>
    </QueryProvider>
  </StrictMode>
);
