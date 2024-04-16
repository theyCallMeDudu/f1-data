import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './TeamForm.css';
import Button from "../../Button/Button";

function TeamForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        year: 1950,
        championships: 0
    });

    useEffect(() => {
        if (id) {
            fetch(`/api/edit-team/${id}`)
            .then(response => response.json())
            .then(data => {
                setFormData(data);
            })
            .catch(error => console.error('An error occurred when trying to fetch team data: ', error));
        } else {
            console.log('nada feito', id);
        }
    }, [id]);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(id ? `/api/update-team/${id}` : '/api/new-team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to save team.');
            }

            // Clear the form after successful sending
            setFormData({
                name: '',
                year: 1950,
                championships: 0
            });

            // Redirect to home page after saving
            navigate('/');
        } catch (error) {
            console.log('An error occurred when trying to save team: ', error);
        }
    }

    return (
        <>
            <div className="div-team-form">
                <h1>{ id ? 'Edit team' : 'New team' }</h1>
                <form className="team-form" onSubmit={handleSubmmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange} />

                    <label htmlFor="year">Foundation</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={formData.year}
                        onChange={handleChange} />

                    <label htmlFor="championships">Championships</label>
                    <input
                        type="number"
                        name="championships"
                        id="championships"
                        value={formData.championships}
                        onChange={handleChange} />

                    <div className="team-form-buttons">
                        <Button
                            type="button"
                            text="Cancel"
                            onClick={() => navigate('/')} />
                        <Button
                            type="submit"
                            text="Save" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default TeamForm;
