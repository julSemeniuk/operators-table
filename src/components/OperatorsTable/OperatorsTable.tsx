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
import { ErrorMessage, UserCard } from 'components/shared';
import { OperatorTableData } from 'types';

interface Props {
    operatorsTableData: OperatorTableData[];
}

const OperatorsTable: React.FC<Props> = ({ operatorsTableData }) => {
    return (
        <TableContainer component={Paper}>
            {operatorsTableData.length === 0 ? (
                <ErrorMessage error={'No operator found'} />
            ) : (
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
                                <TableCell>{operator.text}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

export default OperatorsTable;
