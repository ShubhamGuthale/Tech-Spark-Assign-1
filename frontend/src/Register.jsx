import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../index.css"; // Import index.css globally

const Register = () => {
    const [user, setUser] = useState({ name: "", dob: "", email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", user);
            alert("User registered successfully!");
        } catch (error) {
            alert("Error registering user");
        }
    };

    return (
        <Container className="auth-container">
            <h2>Register</h2>
            <Form className="auth-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} required />
                </Form.Group>

                <Button type="submit" className="btn-primary">Register</Button>
            </Form>
            <div className="auth-footer">
                Already have an account? <a href="/login">Login</a>
            </div>
        </Container>
    );
};

export default Register;
