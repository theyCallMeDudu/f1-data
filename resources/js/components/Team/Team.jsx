import React from "react";
import './Team.css';
import Header from "../Header/Header";
import TeamForm from './TeamForm/TeamForm';

function Team({ id }) {
    return (
        <>
            <Header />
            <TeamForm
                id={id} />
        </>
    );
}

export default Team;
