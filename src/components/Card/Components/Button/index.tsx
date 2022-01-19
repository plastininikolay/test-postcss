import React from 'react';

interface Props {
    text: string
}

const Button = ({text}: Props) => {
    return (
        <button className="card-button">
            {text}
        </button>
    );
};

export default Button;