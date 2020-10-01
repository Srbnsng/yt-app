import React, { useState } from 'react';


const SearchBar = ({onFormSubmit}) =>{

    const [inputText,setInputText] = useState('');

    const onSubmit = (event) => {

        event.preventDefault();
        
        onFormSubmit(inputText);
    };

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
                </div>
            </form>
        </div>
    );
};


export default SearchBar;