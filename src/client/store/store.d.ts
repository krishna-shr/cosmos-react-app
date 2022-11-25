export interface StoreAction<T, P = any> {
    type: T;
    payload: P;
}
export { RootState, AppDispatch } from './index';
