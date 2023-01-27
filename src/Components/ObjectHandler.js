import { ButtonGroup, Button } from "react-bootstrap";

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
      <Button onClick={addObject} className = 'mb-2'> Agregar </Button>
      <br/>
      <ButtonGroup>
      {currList.map(obj => (
        <Button
          key = {obj._id} 
          variant="outline-danger"
          size="sm"
          onClick = {() => deleteObject(obj)}
        > 
          Eliminar {obj._id} 
        </Button>
      ))}
      </ButtonGroup>
      <hr/>
    </div>
  )
}

export default ObjectHandler