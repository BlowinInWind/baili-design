import React, { useState } from 'react';

interface ButtonProps {
    type: string;
}

export default (props: ButtonProps) => {
    const [state, setState] = useState(1);

    return (
        <button
            type="button"
            onClick={() => {
                setState(1);
            }}
        >
            jiangtong
            {state}
            {props.type}
        </button>
    );
};
