import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from '../utils/ErrorBoundary';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const LoginPage = lazy(() =>  import('./LoginPage/LoginPage'));

const Pages = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={routes.HOME} element={HomePage} />
                    <Route path={routes.LOGIN} element={LoginPage} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    )
};

export default Pages;