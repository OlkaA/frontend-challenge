import React from 'react';

function Button(props: any) {
    return (
            <button onClick={props.onClick}>{props.value}</button>
    );
}

export default Button;