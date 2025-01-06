import React , { useRef } from 'react';

const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef  = useRef();

    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Name:', nameRef.current.value);
        console.log('Email:', emailRef.current.value);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameRef} placeholder='your name'/>
            <input type="email" name="email" ref={emailRef} placeholder='your email'/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledForm