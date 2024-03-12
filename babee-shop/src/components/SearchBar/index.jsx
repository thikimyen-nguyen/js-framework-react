// src/Search.js

import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons';

export function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
       console.log("search")
    };

    return (
        <div className="flex my-4 justify-center">
        <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg mr-2"
        />
        
        <SecondaryButton onClick={handleSearch} label='Search' />
        </div>
    );
}



