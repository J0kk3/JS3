import UnnessesaryComponent from "../UnnessesaryComponent/UnnessesaryComponent";

const RenderData = props =>
{
    return (
        <>
            { props.list.map( ( value, index ) =>
            {
                return (
                    <UnnessesaryComponent key={ index } value={ value } />
                );
            } ) }
        </>
    );
};

export default RenderData;