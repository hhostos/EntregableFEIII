
import { useState } from 'react';
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

const [purchased,setPurchased]=useState(0);

const increaseCart =()=>{
  setPurchased(purchased+1);
  console.log("increase ejecutado");
}

  return (
    <div className="App">
      <Cabecera quantity={purchased}/>
      <Listado increase={increaseCart}/>
    </div>
  );
}

export default App;