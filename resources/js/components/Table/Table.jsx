import React from "react";
import './Table.css';
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Table({ columns, data, actions }) {

    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this team?')) {
            fetch(`/api/delete-team/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    console.log(`Team with id ${id} successfully deleted.`);
                    alert(`Team with id ${id} successfully deleted.`);
                    window.location.reload();
                } else {
                    throw new Error('Failed to delete team');
                }
            })
            .catch(error => console.error(`An error occurred when trying to delete team with id ${id}. Error: `, error));
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        { columns.map(column => (
                            <th key={column.key}>{column.title}</th>
                        )) }
                        <th key="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column.key}>{item[column.key]}</td>
                            ))}
                            <td key="actions">
                                {actions.map(action => (
                                    <Button
                                        key={action.key}
                                        text={action.title}
                                        onClick={() => {
                                            if (action.key === 'editTeam') {
                                                navigate(`/edit-team/${item.id}`);
                                            } else if (action.key === 'deleteTeam') {
                                                handleDelete(item.id);
                                            } else if (action.key === 'editDriver') {
                                                navigate(`/edit-driver/${item.id}`);
                                            } else if (action.key === 'deleteDriver') {

                                            }
                                        }} />
                                ))}
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    );
}

export default Table;
