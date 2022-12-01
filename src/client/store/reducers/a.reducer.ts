import { HomeAction } from '../actions/a.action';
import type { IAction, IAState } from '../typings/store';

const initState: IAState = {
    data: {
        status: '',
        msg: '',
    },
    hasError: false,
    error: {},
};

const homeReducer = (
    // eslint-disable-next-line default-param-last
    state = initState,
    action: IAction
): IAState => {
    switch (action.type) {
        case HomeAction.FETCH_DATA:
            return {
                ...state,
                hasError: false,
                data: action.payload,
            };
        case HomeAction.FETCH_DATA_FAILED:
            return {
                ...state,
                hasError: true,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
