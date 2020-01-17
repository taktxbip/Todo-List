import React from "react";

const SearchPanel = () => {

	const searchText = 'Input something';
	const searchStyle = {
		fontSize: '16px'
	};

  return <input type="text" className="search-panel form-control" placeholder={ searchText } style={ searchStyle } />;
};


export default SearchPanel;