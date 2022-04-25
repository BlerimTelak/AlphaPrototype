import axios from "axios";

const departmentEndpoint = 'Departments';

export const getAllDepartments = async () => {
    return await axios.get(departmentEndpoint);
}