// // src/Search.js

// import React, { useState } from 'react';
// import { PrimaryButton } from '../Buttons';

// export function Search() {

//     const [searchInput, setSearchInput] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//   const handleSearchChange = (event) => {
//     const input = event.target.value;
//     setSearchInput(input);

//     const filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setSearchResults(filteredProducts);
//   };

//   const handleSearchClick = () => {
//     const filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredProducts);
//   };


//     return (
//         <div className="flex mb-8 justify-center">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchInput}
//                 onChange={handleSearchChange}
//                 className="p-3 border border-gray-300 rounded-lg mr-2"
//             />
            
//             <PrimaryButton onClick={handleSearchClick} label='Search' />
//         </div>
//     );
// }



