import { useCallback, useState } from 'react';

const useSearch = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
        },
        [setSearchValue]
    );

    return { searchValue, handleSearchChange };
};

export default useSearch;
