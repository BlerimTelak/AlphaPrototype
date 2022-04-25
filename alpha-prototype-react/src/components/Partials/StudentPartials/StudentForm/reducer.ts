import {
    LIST_DEPARTMENTS,
    LIST_DEPARTMENTS_SUCCESS,
    LIST_DEPARTMENTS_ERROR,
    CREATE_STUDENT,
    CREATE_STUDENT_SUCCESS,
    CREATE_STUDENT_ERROR,
} from './constants';
import produce from 'immer'
import {Department} from "../../../../models/Department.interface";
import {Reducer} from "react";

interface StudentFormReducer {
    departmentList: Department[],
    loading: boolean,
}

export const initialState = {
    departmentList: [],
    loading: false,
}

export const studentFormReducer: Reducer<StudentFormReducer, any> = (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case LIST_DEPARTMENTS:
                draft.loading = true;
                break;
            case LIST_DEPARTMENTS_SUCCESS:
                draft.departmentList = action.payload.DepartmentsList
                draft.loading = false
                break;
            case LIST_DEPARTMENTS_ERROR:
                //toast.error('Something went wrong.');
                draft.loading = false;
                break;

            case CREATE_STUDENT:
                draft.loading = true;
                break;
            case CREATE_STUDENT_SUCCESS:
                //toast.success('Student created.');
                draft.loading = false
                break;
            case CREATE_STUDENT_ERROR:
                //toast.error('Something went wrong.');
                draft.loading = false;
                break;

            default:
                break;
        }
    });

export default studentFormReducer;