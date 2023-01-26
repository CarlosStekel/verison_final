import { useEffect, useState } from 'react';

const ObjectHandler = ({defaultObj, idGen, currList, updateList}) => {
  function addObject() {
    const id = idGen + (currList.length + 1);
    const newObj = {...defaultObj, _id: id};
    const newList = [...currList, newObj];
    updateList(newList);
  }

  function deleteObject(object) {
    const filterList = currList.filter(obj => obj !== object);
    const newList = filterList.map((obj, index) => ({...obj, _id: idGen + (index + 1)}));
    updateList(newList);
  }

  return(
    <div>
      <button onClick={addObject}> Agregar </button>
      <br/>
      {currList.map(obj => (
        <button key = {obj._id} onClick = {() => deleteObject(obj)}> Eliminar {obj._id} </button>
      ))}
      <hr/>
    </div>
  )
}

export default ObjectHandler