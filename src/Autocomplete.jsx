import React, { useState } from 'react';
import './App.css';

const Autocomplete = () => {

    const items = ["Apple", "Orange", "Mango", "Delhi", "Aldona", "Vizag", "Raipur"];

    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = []
        if(value?.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items?.sort()?.filter((v) => {
                return (
                    regex?.test(v)
                );
            });
        }
        setText(value);
        setSuggestions({ suggestions });
    };

    const renderSuggestions = () => {
        if(suggestions?.length === 0) {
            return null;
        }
        return (
            <ul>
                {
                    [suggestions]?.map((suggestion) => <li onClick={() => {suggestionSelected(suggestion)}}>{suggestion}</li>)
                }
            </ul>
        );
    };

    const suggestionSelected = (value) => {
        setText(value);
        setSuggestions([]);
    }

  return (
    <div className='Autocomplete'>
        <input type="text" value={text} onChange={onTextChange} />
        {renderSuggestions()}
    </div>
  );
}

export default Autocomplete;
