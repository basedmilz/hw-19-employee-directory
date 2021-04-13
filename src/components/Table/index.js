import React from "react";
import API from "../../utils/api";
import SearchForm from "./SearchForm"

class Table extends React.Component {
    state = {
        employees: [],
        filteremployees: [],
        sort: ""
    }

searchEmployee = name => {
    const filteremployees = this.state.filteremployees.filter(employee => employee.name.first.includes(name));
    this.setState({filteremployees});
}

    componentDidMount() {
        API.fetchEmployees().then(({ data }) => {
            this.setState({
                employees: data.results
            })
        }
        )

    }

    
    
    render() {
        return (
            <div className="App">
                <input className="search"/>
            
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => {


                            return <tr>
                                <td scope="row">
                                    <img src={employee.picture.thumbnail}/>
                                </td>
                                <td>{employee.name.first + " " + employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;