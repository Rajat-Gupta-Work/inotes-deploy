import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/notes/userContext'; // Import UserContext

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const { setUser } = useUser(); // Access setUser from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;

        if (password !== cpassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            const json = await response.json();

            if (response.ok) {
                localStorage.setItem('token', json.authtoken);
                setUser(json.user); // Set user data in context
                navigate("/");
                props.showAlert("Account Created Successfully", "success");
            } else if (response.status === 409) {
                setError("User already exists. Want to login?");
            } else {
                setError(json.error || "Something went wrong");
            }
        } catch (err) {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-3">
            <h2>Signup Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={onChange}
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={onChange}
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={onChange}
                        name="password"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        onChange={onChange}
                        name="cpassword"
                        required
                    />
                </div>
                {error && (
                    <div className="alert alert-danger">
                        {error}
                        {error === "User already exists. Want to login?" && (
                            <div>
                                <Link to="/login">Login here</Link>
                            </div>
                        )}
                    </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
