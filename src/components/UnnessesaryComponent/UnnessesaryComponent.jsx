

const UnnessesaryComponent = props =>
{
    return (
        <div>
            <h2>{ props.value.lastName + " " + props.value.firstName + " " + props.value.age }</h2>
        </div>
    );
};

export default UnnessesaryComponent;