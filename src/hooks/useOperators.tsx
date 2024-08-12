import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect, useRef } from 'react';
import { getOperatorsRequest, getOperatorsAddonsRequest } from 'slices/operatorSlice';

const useOperators = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { operators, operatorsAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            dispatch(getOperatorsRequest());
            dispatch(getOperatorsAddonsRequest());
            hasFetched.current = true;
        }
    }, [dispatch]);

    return { operators, operatorsAddons, loading, error };
};

export default useOperators;
