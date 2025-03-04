import React, { useState } from "react";

const SignupPopupModule = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        useCase: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = "";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://your-backend-api.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Signup successful! Check your email for further instructions.");
            } else {
                setMessage("Signup failed. Please try again later.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-4 max-w-md bg-white rounded-lg shadow-lg">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>&times;</button>
                <h2 className="text-xl font-bold mb-4">Sign up for API/SDK Access</h2>
                <form onSubmit={handleSubmit}
                    /*className="flex flex-col gap-3 relative"*/
                    className="flex flex-col gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-50"
                >
                    <input className="border p-2 rounded" name="name" placeholder="Full Name" onChange={handleChange} required />
                    <input className="border p-2 rounded" type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                    <input className="border p-2 rounded" name="company" placeholder="Company Name" onChange={handleChange} />
                    <input className="border p-2 rounded" name="useCase" placeholder="Describe Your Use Case" onChange={handleChange} required />
                    <button className="bg-blue-500 text-white p-2 rounded" type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Sign Up"}
                    </button>
                </form>
                {message && <p className="mt-3 text-center text-sm">{message}</p>}
            </div>
        </div>
    );
};

export default SignupPopupModule;
