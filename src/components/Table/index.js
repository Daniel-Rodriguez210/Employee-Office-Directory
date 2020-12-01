import React from "react";
import EmployeeCard from "../EmployeeCard/index"

function EmployeeTable ({ data }) {
    return (
    data.map(employee => (
        <EmployeeCard
        key={employee.id}
        image={employee.image}
        name={employee.name}
        occupation={employee.occupation}
        />
    )));
}
    
export default EmployeeTable;