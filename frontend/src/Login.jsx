import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Import Global Styles

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", user);
            localStorage.setItem("token", res.data.token);
            navigate("/table"); // Redirect to protected table page
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <Container className="auth-container">
            <h2>Login</h2>
            <Form className="auth-form" onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} required />
                </Form.Group>

                <Button type="submit" className="btn-primary">Login</Button>
            </Form>
            <div className="auth-footer">
                Don't have an account? <a href="/">Register</a>
            </div>
        </Container>
    );
};

export default Login;
