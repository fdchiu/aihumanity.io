import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignupModule0 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        useCase: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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
        <Card className="p-4 max-w-md mx-auto mt-10">
            <CardContent>
                <h2 className="text-xl font-bold mb-4">Sign up for API/SDK Access</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Input name="name" placeholder="Full Name" onChange={handleChange} required />
                    <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
                    <Input name="company" placeholder="Company Name" onChange={handleChange} />
                    <Input name="useCase" placeholder="Describe Your Use Case" onChange={handleChange} required />
                    <Button type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Sign Up"}
                    </Button>
                </form>
                {message && <p className="mt-3 text-center text-sm">{message}</p>}
            </CardContent>
        </Card>
    );
};

export default SignupModule;
