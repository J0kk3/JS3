

const Button = ( props ) =>
{
    return (
        <button
            onClick={ () => props.click() }
        >
            { props.btnText }
        </button>
    );
};

export default Button;