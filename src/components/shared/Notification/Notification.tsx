import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface Props {
    isOpen: boolean;
    message: string | null;
    severity?: 'error' | 'warning' | 'info' | 'success';
    autoHideDuration?: number | null;
    handleClose: () => void;
}

const Notification: React.FC<Props> = ({
    isOpen,
    message,
    severity = 'error',
    autoHideDuration = null,
    handleClose,
}) => (
    <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
);

export default React.memo(Notification);
