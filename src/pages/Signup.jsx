import React, { useState } from "react";

const SignupModule = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        useCase: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [signupSuccess, setsignupSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://aihapi.onrender.com/signupbeta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Signup successful! Check your email for further instructions.");
                setsignupSuccess(true);
            } else {
                setMessage("Signup failed. Please try again later.");
                setsignupSuccess(false);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again later.");
            setsignupSuccess(false);
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 flex mt-20 justify-center bg-black bg-opacity-50">
            <div className="p-4 max-w-md bg-white rounded-lg shadow-lg">
                {/*<button className="absolute top-2 right-40 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200" onClick={onClose}>
                    &times;
                </button> */}
                <button className="absolute top-2 right-20 text-black text-3xl w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 bg-gray-300 hover:bg-gray-600" onClick={onClose}>
                    &times;
                </button>


                <h2 className="text-l text-gray-600 font-bold mb-4">Sign up for API/SDK Access</h2>
                {
                    !signupSuccess &&
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input className="border p-2 rounded text-gray-500" name="name" placeholder="Full Name*" onChange={handleChange} value={formData.name} required />
                            <input className="border p-2 rounded text-gray-500" type="email" name="email" placeholder="Email Address*" onChange={handleChange} value={formData.email} required />
                            <input className="border p-2 rounded text-gray-500" name="company" placeholder="Company Name" onChange={handleChange} value={formData.company} />
                            <input className="border p-2 rounded text-gray-500" name="useCase" placeholder="Describe Your Use Case*" onChange={handleChange} value={formData.useCase} required />
                            <button className="bg-blue-500 text-white p-2 rounded" type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Sign Up"}
                            </button>
                        </form>
            }
                {message && <p className="mt-3 text-center text-sm text-gray-200">{message}</p>}
            </div>
        {/*
        <div className="p-4 max-w-md mx-auto mt-10 border rounded-lg shadow-lg bg-black bg-opacity-50">
            <h2 className="text-xl font-bold mb-4">Sign up for API/SDK Access</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input className="border p-2 rounded" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input className="border p-2 rounded" type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                <input className="border p-2 rounded" name="company" placeholder="Company Name" onChange={handleChange} />
                <input className="border p-2 rounded" name="useCase" placeholder="Describe Your Use Case" onChange={handleChange} required />
                <button className="bg-blue-500 text-white p-2 rounded" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Sign Up"}
                </button>
            </form>
            {message && <p className="mt-3 text-center text-sm">{message}</p>}
        </div> */}
        </div>

    );
};

export default SignupModule;
