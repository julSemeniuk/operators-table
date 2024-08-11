import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { getOperatorsRequest, getOperatorsAddonsRequest } from 'slices/operatorSlice';

const useOperators = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { operators, operatorsAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    useEffect(() => {
        dispatch(getOperatorsRequest());
        dispatch(getOperatorsAddonsRequest());
    }, [dispatch]);

    return { operators, operatorsAddons, loading, error };
};

export default useOperators;
