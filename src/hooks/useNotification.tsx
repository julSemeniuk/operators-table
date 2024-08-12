import { useState, useEffect, useCallback } from 'react';
import { Notification } from 'components/shared';
import { NOTIFICATION_AUTO_HIDE_DURATION } from 'const';

interface UseNotificationParams {
    message: string | null;
    severity?: 'error' | 'warning' | 'info' | 'success';
    autoHideDuration?: number | null;
}

const useNotification = ({
    message,
    severity = 'error',
    autoHideDuration = NOTIFICATION_AUTO_HIDE_DURATION,
}: UseNotificationParams) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (message) {
            const debounceTimer = setTimeout(() => {
                setIsOpen(true);
            }, 300);

            return () => clearTimeout(debounceTimer);
        }
    }, [message]);

    const handleCloseSnackbar = useCallback(() => {
        setIsOpen(false);
    }, [isOpen]);

    return {
        Notification: (
            <Notification
                isOpen={isOpen}
                message={message}
                severity={severity}
                autoHideDuration={autoHideDuration}
                handleClose={handleCloseSnackbar}
            />
        ),
    };
};

export default useNotification;
