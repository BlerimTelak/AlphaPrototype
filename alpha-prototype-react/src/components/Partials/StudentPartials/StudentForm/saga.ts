import {call, put, takeLatest} from "redux-saga/effects";
import * as departmentService from "../../../../services/department.service";
import * as studentService from "../../../../services/student.service";
import {createStudentError, createStudentSuccess, listDepartmentsError, listDepartmentsSuccess} from "./actions";
import {CREATE_STUDENT, LIST_DEPARTMENTS} from "./constants";

function* listDepartments() {
    try {
        const response = yield call(departmentService.getAllDepartments);
        yield put(listDepartmentsSuccess(response.data));
    } catch (e) {
        yield put(listDepartmentsError(e.message));
    }
}

function* createStudent(action: any){
    try{
        const response = yield call(studentService.createStudent, action.payload.student);
        yield put(createStudentSuccess(response.data));
    } catch (e) {
        yield put(createStudentError(e));
    }
}


export default function* studentFormSaga() {
    yield takeLatest(LIST_DEPARTMENTS, listDepartments);
    yield takeLatest(CREATE_STUDENT, createStudent);
}