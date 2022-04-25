import TextInput from "../../Inputs/TextInput/TextInput";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import React, {useCallback, useEffect, useState} from "react";
import {Student} from "../../../../models/Student.interface";
import ObjectSelect from "../../Selects/ObjectSelect/ObjectSelect";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../../../reducers";
import {Department} from "../../../../models/Department.interface";
import {createStudent, listDepartments} from "./actions";

const StudentForm: React.FC = () => {
    const [formData, setFormData] = useState<Student>();

    const departmentList: Department[] = useSelector((state: RootReducer) => state.studentForm.departmentList)

    const dispatch = useDispatch();
    const listDepartmentsDispatch = useCallback(() => dispatch(listDepartments()), [dispatch]);
    const createStudentDispatch = useCallback((student) => dispatch(createStudent(student)), [dispatch]);

    useEffect(() => {
        listDepartmentsDispatch();
    }, []);

    function handleFormUpdate(source: React.ChangeEvent<HTMLInputElement>) {
        setFormData(
            prevState => ({
                ...prevState,
                [source.target.name]: source.target.value
            }));
    }

    function handleSave(){
        createStudentDispatch(formData);
    }

    return (
        <div>
            <TextInput name='name' value={formData?.name} onChange={handleFormUpdate}/>
            <ObjectSelect name='departmentId' options={departmentList} onChange={handleFormUpdate}/>
            <br/>
            <SubmitButton label='Create' onClick={handleSave}/>
        </div>

    )
}

export default StudentForm;