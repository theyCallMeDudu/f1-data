import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TeamForm.css';
import Button from "../../Button/Button";

function TeamForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        year: 1950,
        championships: 0
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('/api/new-team', {
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
                <h1>New team</h1>
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
                            text="Cancel" />
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
