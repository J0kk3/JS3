// import { useState } from "react";

const Form = props =>
{
    // const [ form, setForm ] = useState( {} );
    const formObj = {
        firstName: "",
        lastName: "",
        age: 0,
        email: "",
        password: "",
    };

    // const handleChange = ( e ) =>
    // {
    //     setForm( { ...form, [ e.target.name ]: e.target.value } );
    // };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        props.addNewUser( formObj );
        for ( const item of e.target.children )
        {
            if ( item.type === "text" || item.type === "number" || item.type === "email" || item.type === "password" )
            {
                item.value = "";
            }
        }
        console.log( formObj );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="firstName" required placeholder="First Name" onChange={ ( event ) => formObj.firstName = event.target.value } />
            <input type="text" name="lastName" required placeholder="Last Name" onChange={ ( event ) => formObj.lastName = event.target.value } />
            <input type="number" min="18" required name="age" placeholder="Age" onChange={ ( event ) => formObj.age = +event.target.value } />
            <input name="email" type="email" required placeholder="E-mail" onChange={ ( event ) => formObj.email = event.target.value } />
            <input name="password" type="password" required placeholder="Password" onChange={ ( event ) => formObj.password = event.target.value } />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;