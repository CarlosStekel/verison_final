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
        <button onClick = {addChoice}> Agregar Ópcion </button>
        <br/>
        {question.choices.map((choice, index) => (
          <button onClick = {() => deleteChoice(choice)}> Eliminar Ópcion {index + 1} </button>  
        ))}
        {question.choices.map((choice, index) => (
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
        ))}
      </div>
    )  
  }
  
  export default ChoiceConfig;