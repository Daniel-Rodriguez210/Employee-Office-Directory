import React, { useState } from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import Table from "./components/Table/index";
import Search from "./components/Search/index"
import employees from "./employees.json";

function App() {
    
    const  [searchTerm, setSearchTerm]  = useState("");
    const  [sorted, setSorted] = useState(false);
    const  [data, setEmployees]  = useState(employees);

    function handleSearchTerm(event)  {
      setSearchTerm(event.target.value)
  }

  function handleSortByName() {
      // sort array ascending or descending by first name
      if (!sorted) {
          setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
          setSorted(true);
      } else {
          setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
          setSorted(false);
      }
  }

  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <Search
      onSearch={handleSearchTerm}
      searchTerm={searchTerm}
      handleSortByName={handleSortByName}
      />
      <Table data={filteredEmployees}/>
    </Wrapper>
  );
}

export default App;











