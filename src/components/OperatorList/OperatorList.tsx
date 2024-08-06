import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from 'store';
import { getOperatorsRequest, getOperatorsAddonsRequest } from '../../slices/operatorSlice'; //todo: fix the abs path

const OperatorList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { operators, operatorAddons, loading, error } = useSelector(
        (state: RootState) => state.operator
    );

    useEffect(() => {
        dispatch(getOperatorsRequest());
        dispatch(getOperatorsAddonsRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Operators</h1>
            <ul>
                {operators.map((operator) => (
                    <li key={operator.id}>{operator.name}</li>
                ))}
            </ul>
            <h1>Operator Addons</h1>
            <ul>
                {operatorAddons.map((addon) => (
                    <li key={addon.id}>{addon.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default OperatorList;
