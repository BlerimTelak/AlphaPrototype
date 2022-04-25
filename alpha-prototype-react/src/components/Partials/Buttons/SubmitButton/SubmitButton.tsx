import React from "react";
interface Props{
    label?: string,
    onClick?(): void;
}

const SubmitButton: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick}>{props.label ?? 'Submit'}</button>
    )
}

export default SubmitButton;

