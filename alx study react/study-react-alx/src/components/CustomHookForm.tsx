import React from 'react';
import useForm from './Custom Form Hooks/useForm';

function CustomHookForm() {
    const { values, handleChange, resetForm } = useForm({ name: '', email: '' });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
        />
        <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
    </form>
    )
}

export default CustomHookForm;