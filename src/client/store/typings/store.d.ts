import { ActionCreator, Dispatch } from 'redux';

export interface IAction {
    type: string;
    payload: any;
}

export interface IData {
    status: string;
    msg: string;
}

export interface IAState {
    data: IData;
    hasError: boolean;
    error: any;
}

export interface IRootState {
    a: IAState;
}

export type ActionCreatorReturnType<T> = {
    type: string;
    payload?: T;
};

export type IDispatch = Dispatch | ActionCreator<any>;
