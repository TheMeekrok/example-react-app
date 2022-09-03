import React from 'react';

interface ErrorMessageProps {
    error: string;
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className='text-center uppercase shadow-2xl'>{ error } </p>
    )
}