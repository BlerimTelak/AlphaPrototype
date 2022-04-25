import React, {useState} from "react";
import './style.css'
interface Props {
    name?: string,
    value?: string,
    onChange?(event: any): void
    type?: string
}

const TextInput: React.FC<Props> = (props) => {

    return(
        <input name={props.name} type={props.type ?? "text"} value={props.value} onChange={props.onChange}/>
    )
}

export default TextInput;