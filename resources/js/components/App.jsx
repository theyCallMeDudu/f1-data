import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';
import './App.css';

function App() {
    const teamsColumns = [
        { key: 'id', title: 'Id' },
        { key: 'name', title: 'Name' },
        { key: 'year', title: 'Foundation' },
        { key: 'championships', title: 'Championships' }
    ];

    const teamsActions = [
        { key: 'editTeam', title: 'Edit' },
        { key: 'deleteTeam', title: 'Delete' },
    ];

    const [teams, setTeams] = useState([]);

    const driversColumns = [
        { key: 'id', title: 'Id' },
        { key: 'name', title: 'Name' },
        { key: 'birth', title: 'Birth' },
        { key: 'championships', title: 'Championships' },
        { key: 'victories', title: 'Victories' },
    ];

    const driversActions = [
        { key: 'editDriver', title: 'Edit' },
        { key: 'deleteDriver', title: 'Delete' },
    ];

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('api/teams') // route to Laravel API
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('An error occurred when trying to get teams:', error));
    }, []);

    useEffect(() => {
        fetch('api/drivers')
            .then(response => response.json())
            .then(data => setDrivers(data))
            .catch(error => console.error('An error occurred when trying to get drivers: ', error));
    }, []);

    return (
        <>
            <div>
                <Header />
                <Table
                    columns={teamsColumns}
                    data={teams}
                    actions={teamsActions} />
                <hr />
                <Table
                    columns={driversColumns}
                    data={drivers}
                    actions={driversActions} />
            </div>
        </>
    );
}

export default App;
