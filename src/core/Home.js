import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            EmpData: []
        }
    }

    componentDidMount()  {

        fetch('http://localhost:3050/employees')
        .then(res => res.json())
        .then((result) => {
            this.setState({ EmpData: result })
        })
        .catch(console.log("Some error is there"))

    }

    render() {

        const { EmpData } = this.state;

        return (
            <div>
                <div>Project Status</div>
                <div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Project</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Date</th>
                                <th scope="col">Logged Time</th>
                            </tr>
                        </thead>
                        {EmpData.map(el => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>{el.id}</p>
                                        </td>
                                        <td>
                                            <p>{el.project}</p>
                                        </td>
                                        <td>
                                            <p>{el.employee}</p>
                                        </td>
                                        <td>
                                            <p>{el.date}</p>
                                        </td>
                                        <td>
                                            <p>{el.loggedTime}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        )
    }
}