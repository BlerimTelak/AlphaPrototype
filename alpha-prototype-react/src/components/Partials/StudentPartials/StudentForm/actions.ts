import {
    CREATE_STUDENT,
    CREATE_STUDENT_ERROR,
    CREATE_STUDENT_SUCCESS,
    LIST_DEPARTMENTS,
    LIST_DEPARTMENTS_ERROR,
    LIST_DEPARTMENTS_SUCCESS
} from "./constants";
import {Department} from "../../../../models/Department.interface";
import {Student} from "../../../../models/Student.interface";

export const createStudent = (student: Student | undefined) => ({
    type: CREATE_STUDENT,
    payload: {
        student
    }
});

export const createStudentSuccess = (StudentList: Student[]) => ({
    type: CREATE_STUDENT_SUCCESS,
    payload: {
        StudentList
    }
});

export const createStudentError = (Student: Student) => ({
    type: CREATE_STUDENT_ERROR,
    payload: Student
});


export const listDepartments = () => ({
    type: LIST_DEPARTMENTS
});

export const listDepartmentsSuccess = (DepartmentsList: Department[]) => ({
    type: LIST_DEPARTMENTS_SUCCESS,
    payload: {
        DepartmentsList
    }
});

export const listDepartmentsError = (message: string) => ({
    type: LIST_DEPARTMENTS_ERROR,
    payload: {
        message
    }
});

