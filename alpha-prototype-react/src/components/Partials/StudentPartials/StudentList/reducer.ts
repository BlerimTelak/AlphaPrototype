import {
    LIST_STUDENTS,
    LIST_STUDENTS_SUCCESS,
    LIST_STUDENTS_ERROR,
    DELETE_STUDENT,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_ERROR,
} from './constants';
import produce from 'immer'
import {Student} from "../../../../models/Student.interface";
import {Reducer} from "react";

interface StudentListReducer{
    studentList: Student[],
    loading: boolean,
}

export const initialState = {
    studentList: [],
    loading: false,
}

export const studentListReducer: Reducer<StudentListReducer, any> = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case LIST_STUDENTS:
                draft.loading = true;
                break;
            case LIST_STUDENTS_SUCCESS:
                draft.loading = false
                draft.studentList = action.payload.studentList
                break;
            case LIST_STUDENTS_ERROR:
                //toast.error('Something went wrong.');
                draft.loading = false;
                break;

            case DELETE_STUDENT:
                draft.loading = true;
                break;
            case DELETE_STUDENT_SUCCESS:
                draft.loading = false
                break;
            case DELETE_STUDENT_ERROR:
                //toast.error('Something went wrong.',);
                draft.loading = false
                break;

            default:
                break;
        }
    });

export default studentListReducer;