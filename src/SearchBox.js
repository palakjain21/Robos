import React from 'react';


const SearchBox =({searchfield, searchChange }) => {
	return(
	<div className ='p2'>
		<h2>
	   <input 
	     className='pa3 ba b--blue bg-lightest-blue'
		
	     type='search'
	     placeholder= '          Search Robots'
	     onChange= {searchChange}
	   />
	   </h2>
	</div>
	);
}

export default SearchBox;