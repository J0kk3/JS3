//hooks
import { useState } from "react";
//components
import Add from "./Components/Add/Add";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import RenderData from "./Components/RenderData/RenderData";

function App ()
{
  const [ list, setList ] = useState( [] );

  const addNewUser = ( formObj ) =>
  {
    setList( list => [ ...list, formObj ] );
  };

  const click = () =>
  {
    console.log( "TEST TESTSSON!" );
  };

  return (
    <div>
      <Add />
      <Form addNewUser={ addNewUser } />
      <RenderData list={ list } />
      <Button btnText="I'm button one" click={ click } />
    </div>
  );
}

export default App;