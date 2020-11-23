import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import Dropdown from "./components/Dropdown/dropdown"
import employee from "./employees.json";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <Dropdown/>
      <EmployeeCard
        name={employee[0].name}
        image={employee[0].image}
        occupation={employee[0].occupation}
      />
      <EmployeeCard
        name={employee[1].name}
        image={employee[1].image}
        occupation={employee[1].occupation}
      />
      <EmployeeCard
        name={employee[2].name}
        image={employee[2].image}
        occupation={employee[2].occupation}
      />
      <EmployeeCard
        name={employee[3].name}
        image={employee[3].image}
        occupation={employee[3].occupation}
      />
      <EmployeeCard
        name={employee[4].name}
        image={employee[4].image}
        occupation={employee[4].occupation}
      />
      <EmployeeCard
        name={employee[5].name}
        image={employee[5].image}
        occupation={employee[5].occupation}
      />
      <EmployeeCard
        name={employee[6].name}
        image={employee[6].image}
        occupation={employee[6].occupation}
      />
      <EmployeeCard
        name={employee[7].name}
        image={employee[7].image}
        occupation={employee[7].occupation}
      />
      <EmployeeCard
        name={employee[8].name}
        image={employee[8].image}
        occupation={employee[8].occupation}
      />
      <EmployeeCard
        name={employee[9].name}
        image={employee[9].image}
        occupation={employee[9].occupation}
      />
      <EmployeeCard
        name={employee[10].name}
        image={employee[10].image}
        occupation={employee[10].occupation}
      />
      <EmployeeCard
        name={employee[11].name}
        image={employee[11].image}
        occupation={employee[11].occupation}
      />
      <EmployeeCard
        name={employee[12].name}
        image={employee[12].image}
        occupation={employee[12].occupation}
      />
      <EmployeeCard
        name={employee[13].name}
        image={employee[13].image}
        occupation={employee[13].occupation}
      />
      <EmployeeCard
        name={employee[14].name}
        image={employee[14].image}
        occupation={employee[14].occupation}
      />
      <EmployeeCard
        name={employee[15].name}
        image={employee[15].image}
        occupation={employee[15].occupation}
      />
      
    </Wrapper>
  );
}

export default App;
