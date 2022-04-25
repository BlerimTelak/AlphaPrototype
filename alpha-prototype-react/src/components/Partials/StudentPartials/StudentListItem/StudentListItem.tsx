import React from "react";
import './styles.css'
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import {Student} from "../../../../models/Student.interface";
interface Props{
    key?: number,
    student?: Student,
    deleteStudent?(id: string | undefined): void
}

const StudentListItem: React.FC<Props> = (props) => {
    function deleteClickHandler() {
        if(props.student && props.deleteStudent){
            props.deleteStudent(props.student?.id);
        }
    }

    return (
        <div>
            <li>
                <div className="d-flex">
                    {props.student?.name} | {props.student?.department?.name ?? 'No Department'}
                    <DeleteButton onClick={deleteClickHandler}/>
                </div>
            </li>
        </div>
    )
}
export default StudentListItem;