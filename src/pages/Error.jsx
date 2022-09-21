import React from 'react';
import CustomLink from "../components/CustomLink/CustomLink";

const Error = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>
                You are on non-existent page
            </h1>
            <CustomLink to='/'>Go home</CustomLink>
        </div>
    );
};

export default Error;