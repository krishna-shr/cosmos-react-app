import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ErrorBoundary from '@shared/ErrorBoundary';
import appRoutes, { IRoute } from './routes';

type ICreateRouteProps = {
    route: IRoute;
};

const Loader = (): ReactElement => <div>Loading....</div>;

const createRoute = ({ route }: ICreateRouteProps): React.ReactNode => (
    <Route key={route.path} path={route.path} element={<route.element />}>
        {route.children &&
            route.children.map((childRoute) =>
                createRoute({ route: childRoute })
            )}
    </Route>
);

const Root = (): React.ReactElement => (
    <React.Suspense fallback={<Loader />}>
        <Routes>
            {appRoutes.map((route) =>
                createRoute({
                    route,
                })
            )}
        </Routes>
    </React.Suspense>
);

const App = (): React.ReactElement => {
    const baseP = `${process.env.BASE_PATH}/`;
    return (
        <div>
            <Helmet>
                <title>Meesho | React App</title>
            </Helmet>
            <ErrorBoundary>
                <BrowserRouter basename={baseP}>
                    <Root />
                </BrowserRouter>
            </ErrorBoundary>
        </div>
    );
};

export default App;
