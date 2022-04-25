/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';
import { DefaultRootState } from 'react-redux';
import studentFormReducer from './components/Partials/StudentPartials/StudentForm/reducer';
import studentListReducer from './components/Partials/StudentPartials/StudentList/reducer';
export interface RootReducer extends DefaultRootState {
    studentList: any,
    studentForm: any
}
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const combinedReducers = combineReducers({
    studentList: studentListReducer,
    studentForm: studentFormReducer
});

const rootReducer = (state: any, action: any) => {
    return combinedReducers(state, action);
};

export default rootReducer;