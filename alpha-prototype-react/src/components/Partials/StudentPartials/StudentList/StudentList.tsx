import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {deleteStudent, listStudents} from "./actions";
import { Student } from "../../../../models/Student.interface";
import {RootReducer} from "../../../../reducers";
import StudentListItem from "../StudentListItem/StudentListItem";

const StudentList: React.FC = () => {
    const studentList: Student[] = useSelector((state: RootReducer) => state.studentList.studentList)

    const dispatch = useDispatch();
    const listStudentsDispatch = useCallback(() => dispatch(listStudents()), [dispatch]);
    const deleteStudentDispatch = useCallback((id: string) => dispatch(deleteStudent(id)), [dispatch]);

    useEffect(() => {
        listStudentsDispatch();
    }, []);

    return (
        <div>
            <ul>
                {studentList && studentList.map((student, idx) =>
                    <StudentListItem key={idx} student={student} deleteStudent={deleteStudentDispatch}/>
                )}
            </ul>
        </div>
    )
}

export default StudentList;