import React from "react";
import './Table.css';
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Table({ columns, data, actions }) {

    const navigate = useNavigate();

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
                                            if (action.key === 'edit') {
                                                navigate(`/edit-team/${item.id}`);
                                            } else if (action.key === 'delete') {
                                                //
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
