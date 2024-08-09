export const formatIsoDateTime = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })}`;
};
