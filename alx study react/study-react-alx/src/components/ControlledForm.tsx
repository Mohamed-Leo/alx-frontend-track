import React, { useState } from 'react';


interface IUser {
    name : string;
    age : string;
    email : string;
    phone : string;
    password : string;
    country : string;
}

const ControlledForm = () => {
    const [formData , setFormData] = useState<IUser>({
        name: "",
        age : "",
        email: "",
        phone: "",
        password : "",
        country : ""
    });


    const handleChange = (e :  React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData , [name] : value});
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }


    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                name="name"
                placeholder='your name'
                onChange={handleChange}
                value={formData.name}
            />
            <input
                type="email"
                name="email"
                placeholder='your email'
                onChange={handleChange}
                value={formData.email}
            />
            <input
                type="number"
                name="age"
                placeholder='your age'
                onChange={handleChange}
                value={formData.age}
            />
            <input
                type="password"
                name="password"
                placeholder='your password'
                onChange={handleChange}
                value={formData.password}
            />
            <input
                type="text"
                name="phone"
                placeholder='your phone'
                onChange={handleChange}
                value={formData.phone}
            />
            <input
                type="text"
                name="country"
                placeholder='your country'
                onChange={handleChange}
                value={formData.country}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;