type processKeys = { [key: string]: string };
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }

    declare const process: {
        env: processKeys;
    };
}

export {};
