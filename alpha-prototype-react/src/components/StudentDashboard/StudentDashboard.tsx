import React from "react";
import StudentList from "../Partials/StudentPartials/StudentList/StudentList";
import StudentForm from "../Partials/StudentPartials/StudentForm/StudentForm";

const StudentDashboard: React.FC = () => {

    return (
        <div>
            <h1>Students Dashboard</h1>
            <StudentForm/>
            <StudentList/>
        </div>
    )
}
export default StudentDashboard;