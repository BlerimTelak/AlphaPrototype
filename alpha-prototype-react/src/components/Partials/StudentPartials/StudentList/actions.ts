import {
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_ERROR,
    LIST_STUDENTS,
    LIST_STUDENTS_SUCCESS,
    LIST_STUDENTS_ERROR
} from "./constants";
import {Student} from "../../../../models/Student.interface";

export const listStudents = () => ({
    type: LIST_STUDENTS
});

export const listStudentsSuccess = (studentList: Student[]) => ({
    type: LIST_STUDENTS_SUCCESS,
    payload: {
        studentList
    }
});

export const listStudentsError = (errorMessage: string) => ({
    type: LIST_STUDENTS_ERROR,
    // This e.message part is here because you might want to have error messages generated from back-end, totally optional.
    payload: {
        errorMessage
    }
});

export const deleteStudent = (id: string) => ({
    type: DELETE_STUDENT,
    payload: {
        id: id
    }
});

export const deleteStudentSuccess = () => ({
    type: DELETE_STUDENT_SUCCESS,
});

export const deleteStudentError = (errorMessage: string) => ({
    type: DELETE_STUDENT_ERROR,
    // This e.message part is here because you might want to have error messages generated from back-end, totally optional.
    payload: {
        errorMessage
    }
});