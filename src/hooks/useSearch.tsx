import { useState } from 'react';

const useSearch = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return { searchValue, handleSearchChange };
};

export default useSearch;
