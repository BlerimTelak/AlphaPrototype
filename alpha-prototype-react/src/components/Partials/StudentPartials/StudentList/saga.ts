import {call, put, takeLatest} from 'redux-saga/effects';
import {
    listStudentsSuccess,
    listStudentsError,
    deleteStudentSuccess,
    deleteStudentError
} from "./actions";
import {
    LIST_STUDENTS,
    DELETE_STUDENT
} from "./constants";
import * as studentService from "../../../../services/student.service";


function* listStudents() {
    try {
        const response = yield call(studentService.getAllStudents);
        yield put(listStudentsSuccess(response.data));
    } catch (e) {
        // This e.message part is here because you might want to have error messages generated from back-end, totally optional.
        yield put(listStudentsError(e.message));
    }
}

function* deleteStudent(action: any){
    try{
        yield call(studentService.deleteStudent, action.payload.id);
        yield put(deleteStudentSuccess());
    } catch (e) {
        // This e.message part is here because you might want to have error messages generated from back-end, totally optional.
        yield put(deleteStudentError(e.message));
    }
}

export default function* studentListSaga() {
    yield takeLatest(LIST_STUDENTS, listStudents);
    yield takeLatest(DELETE_STUDENT, deleteStudent);
}
