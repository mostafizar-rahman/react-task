import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [formValue, setFormValue] = useState({
    name: "",
    status: "",
  });
  const [tableList, setTableList] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  //   ---------- get input field value and set an object
  const handleInputField = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormValue({ ...formValue, [name]: value });
  };

  //   --------- click submit button item add table list
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTableList([...tableList, formValue]);
    e.target.reset();
  };

  const filterAndSortTasks = () => {
    if (show === "active") {
      return tableList.filter(({ status }) => status.toLowerCase() === "active");
    }
    if (show === "completed") {
      return tableList.filter(({ status }) => status.toLowerCase() === "completed");
    }
    if (show === "all") {
      const customOrder = { active: 0, completed: 1 };
      return tableList.sort(
        (a, b) => customOrder[a.status.toLowerCase()] - customOrder[b.status.toLowerCase()]
      );
    }

  };

  const filterData = filterAndSortTasks();


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleFormSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleInputField}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                onChange={handleInputField}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map(({ name, status }, index) => (
                <tr key={index}>
                  <td>{name}</td> <td>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
