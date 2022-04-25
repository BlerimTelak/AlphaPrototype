import {all, fork} from 'redux-saga/effects';
import studentListSaga from "./components/Partials/StudentPartials/StudentList/saga";
import studentFormSaga from "./components/Partials/StudentPartials/StudentForm/saga";

export default function* rootSaga() {
    yield all([
        fork(studentListSaga),
        fork(studentFormSaga)
    ]);
    // code after fork-effect
}
