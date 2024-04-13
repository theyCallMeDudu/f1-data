import React from "react";
import './Table.css';

function Table({ columns, data }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        { columns.map(column => (
                            <th key={column.key}>{column.title}</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { data.map((item, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column.key}>{item[column.key]}</td>
                            ))}
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    );
}

export default Table;
