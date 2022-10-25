//hooks
import { useState, useEffect } from "react";
//components
import Button from "../Button/Button";

const Add = () =>
{
    const [ number, setNumber ] = useState( 0 );

    // useEffect( () =>
    // {
    //     console.log( "componentDidMount & componentDidUpdate" );
    // } );

    // useEffect( () =>
    // {
    //     console.log( "componentDidMount" );
    // }, [] );

    // useEffect( () =>
    // {
    //     console.log( "dependencyDidUpdate & componentDidMount" );
    // }, [ number ] );

    useEffect( () =>
    {
        console.log( "componentWillMount" );
        return () =>
        {
            console.log( "componentWillUnmount" );
        };
    }, [] );

    const increase = () =>
    {
        setNumber( number => number + 1 );
    };

    return (
        <div>
            <h1>{ number }</h1>
            <Button btnText="Increase" click={ increase } />
        </div>
    );
};

export default Add;