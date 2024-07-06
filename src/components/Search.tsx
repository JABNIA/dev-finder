import React, { ChangeEvent, FormEvent, useState } from 'react'
import './Search.css'
import { findAllByAltText } from '@testing-library/react';

type findDeveloper = {
    setUser:  React.Dispatch<React.SetStateAction<string>>;
}

type colorTheme = {
    isLight: boolean,
}

type connectedTypes = findDeveloper & colorTheme


function Search(props:connectedTypes){

    const [devName, setDevName] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setDevName(event.currentTarget.value)
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>){
        props.setUser(devName)
    }
 
    return (
        <div id='search-container'>
            <input type="text" className='search' placeholder='Search Github Username...' onChange={handleChange} style={{color: props.isLight ? "black" : "#FFF", backgroundColor: props.isLight ? "#FFF" : 'rgb(25, 42, 78)'}}/>
            <p className='search-icon'><svg height="24" width="25" xmlns="http://www.w3.org/2000/svg" >
                <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" fill="#0079ff"/></svg>
            </p>
            <button className='search-btn' onClick={handleClick}>Search</button>
        </div>
    )
}


export default Search