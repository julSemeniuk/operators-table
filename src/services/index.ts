import axios from 'axios';
import { BASE_URL } from './config';
import { Operator, OperatorAddon } from '../types';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getOperators = () => api.get<Operator[]>('operator');
export const getOperatorsAddons = () => api.get<OperatorAddon[]>('operatorAddon');
