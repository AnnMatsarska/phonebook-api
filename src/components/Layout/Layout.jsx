import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
        />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
