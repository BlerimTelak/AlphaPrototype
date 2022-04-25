import axios from 'axios';
import {Student} from "../models/Student.interface";

const studentEndpoint = 'Students'

export const getAllStudents = async () => {
    return await axios.get(studentEndpoint);
}

export const getStudent = async (id: string) => {
    return await axios.get(`${studentEndpoint}/${id}`);
}

export const createStudent = async (student: Student) => {
    return await axios.post(studentEndpoint, student);
};

export const deleteStudent = async (id: string) => {
    return await axios.delete(`${studentEndpoint}/${id}`);
};