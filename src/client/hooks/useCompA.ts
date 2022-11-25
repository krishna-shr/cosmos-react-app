import { useSelector } from 'react-redux';
import { IData, IRootState } from '@store/typings/store';
import { useEffect } from 'react';
import useAActionCreator from '@store/actions/a.actionCreator';

const useCompA = (): IData => {
    const {
        data
    } = useSelector((state: IRootState) => ({
        data: state.a.data
    }));

    const { getData } = useAActionCreator();

    useEffect(() => {
        getData()
    },[]);

    return data
};

export default useCompA;
