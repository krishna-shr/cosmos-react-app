import { useDispatch } from 'react-redux';
import { makeGet } from '../../services/api/api.service';
import { HomeAction } from './a.action';
import apiRoutes from '../../constants/apiRoutes.constants';

export interface IAAction {
    getData: () => Promise<void>;
}

const useAActionCreator = (): IAAction => {
    const dispatch = useDispatch();

    const getData = async (): Promise<void> => {
        try {
            const res = await makeGet(apiRoutes.GET_DATA);
            dispatch({
                type: HomeAction.FETCH_DATA,
                payload: res,
            });
        } catch (error) {
            dispatch({
                type: HomeAction.FETCH_DATA_FAILED,
                payload: error,
            });
        }
    };

    return {
        getData,
    };
};

export default useAActionCreator;
