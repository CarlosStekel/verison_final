import { Button, ButtonGroup, Tab, Tabs } from "react-bootstrap";
import ObjectForm from "./Components/ObjectForm";

const ChoiceConfig = ({question, setChoice, setChoices}) => {
    function addChoice() {
      const newChoices = [...question.choices, {
        name : "Opcion",
        value : 1,
        absolute_position : 3,
        relative_position : 1,
        write_in: false
      }]
      setChoices(newChoices, question._id)  
    }

    function deleteChoice(choice) {
      const newChoices = question.choices.filter(Ch => Ch !== choice)
      setChoices(newChoices, question._id)    
    }
    
    return (
      <div>
        <Button onClick = {addChoice} className = 'mb-2'> Agregar </Button>
        <br/>
        <ButtonGroup>
          {question.choices.map((choice, index) => (
            <Button
              key={index} 
              variant="outline-danger"
              size="sm"
              onClick = {() => deleteChoice(choice)}
            > 
              Eliminar O{index + 1} 
            </Button>  
          ))}
        </ButtonGroup>
        <hr/>
        <Tabs>
        {question.choices.map((choice, index) => (
          <Tab
            eventKey = {index} 
            title = {"O" + (index + 1)} 
            key= {index}
          >
            <ObjectForm
              key = {question._id + "_" + index}
              obj = {choice}
              lnames = {['Nombre', 'Valor', 'Posicion Absoluta', 'Posicion Relativa', 'Escribir']}
              types = {['text', 'text', 'text', 'text', 'checkbox']}
              onChange = {['default', 'number', 'number', 'number', 'checkbox']}
              enabled = {[true, true, true, true, true]}
              visible = {[true, true, true, true, true]}
              setObj = {(choice) => setChoice(choice, index, question._id)}
            />
          </Tab> 
        ))}
        </Tabs>
      </div>
    )  
  }
  
  export default ChoiceConfig;