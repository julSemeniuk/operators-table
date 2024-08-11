export const formatIsoDateTime = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })}`;
};

export const convertCamelToTitleCase = (key: string): string => {
    const fieldName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
};
