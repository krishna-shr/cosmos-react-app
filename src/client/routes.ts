import React from 'react';
import {
    routePath,
} from '@constants/container.constants';
import Home from '@pages/Home';
import CompA from '@pages/CompA';

export interface IRoute {
    path: string;
    element: React.ComponentType<any>; // DEFINE TYPES OF THE PROPS AS WELL
    children?: IRoute[];
    index?: boolean;
}

export interface ITabRoute {
    path: string;
    tabKey?: number;
}

const routes: IRoute[] = [
    {
        path: routePath.HOME,
        element: Home,
        index: true,
    },
    {
        path: routePath.A,
        element: CompA,
    },
];

export default routes;
