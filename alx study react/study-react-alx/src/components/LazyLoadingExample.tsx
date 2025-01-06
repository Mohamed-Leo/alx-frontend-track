import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./LazyComponent'));

const LazyLoadingExample = () => (
    <div>
        {/* Use Suspense to wrap the lazy-loaded component */}
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    </div>
);

export default LazyLoadingExample;