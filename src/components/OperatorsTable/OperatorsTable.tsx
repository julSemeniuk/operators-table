import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
} from '@mui/material';
import { OperatorTableData } from '../../types';
import { UserCard } from '../shared';

interface Props {
    operatorsTableData: OperatorTableData[];
}

const OperatorsTable: React.FC<Props> = ({ operatorsTableData }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Is Working</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operatorsTableData.map((operator) => (
                        <TableRow key={operator.id}>
                            <TableCell>{operator.id}</TableCell>
                            <TableCell>
                                <UserCard avatarUrl={operator.avatar} name={operator.name} />
                            </TableCell>
                            <TableCell>
                                <Checkbox checked={operator.isWorking} readOnly />
                            </TableCell>
                            <TableCell>
                                {new Date(operator.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{operator.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OperatorsTable;
