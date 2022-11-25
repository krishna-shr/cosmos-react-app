import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combineReducer';

const devExtn =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.ENVIRONMENT !== 'production'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), devExtn))

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
