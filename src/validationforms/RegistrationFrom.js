import { useState } from "react";

const RegisterForm = () => {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        conform_password: '',
        phone: '', // Added phone number field
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'cors'
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Register User</h1>
            <center>
                <form onSubmit={handlesubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                        value={formdata.name} 
                        onChange={handlechange} 
                    /><br/>

                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required 
                        value={formdata.email} 
                        onChange={handlechange} 
                    /><br/>

                    <label>Phone Number:</label>
                    <input 
                        type="number" 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        required 
                        value={formdata.phone} 
                        onChange={handlechange} 
                    /><br/>

                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        required 
                        value={formdata.password} 
                        onChange={handlechange} 
                    /><br/>

                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        name="conform_password" 
                        placeholder="Confirm your password" 
                        required 
                        value={formdata.conform_password} 
                        onChange={handlechange} 
                    /><br/>

                    <button type="submit">Register</button>
                </form>
            </center>
        </div>
    );
};

export default RegisterForm;


