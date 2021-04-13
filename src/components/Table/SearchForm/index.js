import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          id="search"
        />
        
      </div>
    </form>
  );
}

export default SearchForm;