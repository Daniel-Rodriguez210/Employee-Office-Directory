import React from "react";

function Dropdown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor: "#2A77AE"}}>
                Employee By Dept.
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">Sales</a>
                <a className="dropdown-item" href="/">Accountants</a>
                <a className="dropdown-item" href="/">Customer Service</a>
                <a className="dropdown-item" href="/">Others</a>
            </div>
        </div>
    )
}

export default Dropdown;