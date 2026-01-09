import { memo, useEffect } from 'react';

const PageNotFound = memo(() => {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);
  return (
    <section className='bg-backgroundColor flex min-h-screen items-center'>
      <div className='mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-24 text-7xl font-extrabold tracking-tight text-white lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl'>
            Page not found currently
          </p>
          <p className='mb-4 text-lg font-light text-gray-300'>Sorry, we can't find such page.</p>
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            type='button'
            className='bg-primary hover:text-quaternary mb-2 cursor-pointer rounded-full px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white focus:ring-1 focus:ring-purple-300 focus:outline-none'
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  );
});
export default PageNotFound;
