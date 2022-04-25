import React from "react";
import {ReactComponent as DeleteIcon} from "../../../../assets/icons/deleteIcon.svg";
interface Props{
    onClick?(): void;
}

const DeleteButton: React.FC<Props> = (props) => {
    return (
        <DeleteIcon className="delete--button" onClick={props.onClick}></DeleteIcon>
    )
}

export default DeleteButton;

