import React, { useState } from 'react';

const ControlledForm = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formdata, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {};

        if (!formdata.name.trim()) {
            newError.name = "Name is required";
        }

        if (!formdata.email) {
            newError.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
            newError.email = "Email is Invalid";
        }

        if (!formdata.password) {
            newError.password = "Password is required";
        } else if (formdata.password.length < 6) {
            newError.password = "Password must be at least 6 characters";
        }

        setError(newError);

        if (Object.keys(newError).length === 0) {
            setSubmittedData(formdata);
            alert("Form submitted successfully");

            setFormData({ name: "", email: "", password: "" });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                
                <input type="text" placeholder="name" name="name" value={formdata.name} onChange={handleChange} />
                {error.name && <p>{error.name}</p>}

                <input type="email" name="email" placeholder="email" value={formdata.email} onChange={handleChange} />
                {error.email && <p>{error.email}</p>}

                <input type="password" name="password" placeholder="password" value={formdata.password} onChange={handleChange} />
                {error.password && <p>{error.password}</p>}

                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h1>Submitted Data:</h1>
                    <p>{submittedData.name}</p>
                    <p>{submittedData.email}</p>
                    <p>{submittedData.password}</p>
                </div>
            )}
        </>
    );
};

export default ControlledForm;