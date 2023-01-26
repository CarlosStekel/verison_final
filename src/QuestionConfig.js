import ChoiceConfig from "./ChoiceConfig";
import Collapsible from "./Components/Collapsible";
import ObjectForm from "./Components/ObjectForm";
import ObjectHandler from "./Components/ObjectHandler";

const QuestionConfig = ({questions, setQuestions, setQuestion}) => {
  function setChoice(choice, cIndex, qId) {
    const qIndex = questions.findIndex(Q => Q._id === qId);
    const newChoice = [...questions[qIndex].choices.slice(0, cIndex), choice, ...questions[qIndex].choices.slice(cIndex + 1)]
    const newQuestion = {...questions[qIndex], choices: newChoice}
    const newQuestions = [...questions.slice(0, qIndex), newQuestion, ...questions.slice(qIndex + 1)]
    setQuestions(newQuestions)
  }

  function setChoices(choice, qId) { //placeholder
    const qIndex = questions.findIndex(Q => Q._id === qId);
    const newQuestion = {...questions[qIndex], choices: choice}
    const newQuestions = [...questions.slice(0, qIndex), newQuestion, ...questions.slice(qIndex + 1)]
    setQuestions(newQuestions)
  }
  
  return (
    <div>
      <ObjectHandler
        defaultObj = {{
          _id : "Q1",
          name : "Pregunta Uno",
          relative_position : 0,
          min_options : 0,
          max_options : 1,
          accept_null : true,
          accept_null_explicit : false,
          accept_blank_explicit : false,
          distributed: false,
          choices : [ {
            name : "Opcion 1, Pregunta uno",
            value : 1,
            absolute_position : 2,
            relative_position : 1,
            write_in: false
          }, {
            name : "Opcion 2, Pregunta uno",
            value : 1,
            absolute_position : 3,
            relative_position : 1,
            write_in: false
          } ],
          lists : [ ]
        }}
        idGen = {"Q"}
        currList = {questions}
        updateList = {setQuestions}
      />
      {questions.map((question) => (
        <div key = {question._id}>
          <ObjectForm
            obj = {question}
            lnames ={[
              "Id", 
              "Nombre", 
              "Posición Relativa", 
              "Minimo de Opciones", 
              "Maximo de Opciones", 
              "Acepta Nulo", 
              "Acepta Nulo Explicito",
              "Acepta Blanco Explicito",
              "Distribuido",
              "Opciones",
              "Listas"
            ]}
            types = {['text', 'text', 'text' ,'text', 'text', 'checkbox', 'checkbox', 'checkbox', 'checkbox', 'text', 'text']}
            onChange = {["default", "default", "number", "number", "number", "checkbox", "checkbox", "checkbox", "checkbox"]}
            enabled = {[false, true, true ,true, true, true, true, true, true, true, true]}
            visible = {[true, true, true ,false, true, true, true, true, true, true, false]}
            setObj = {setQuestion}
          />
          <Collapsible title = {"Configuracion de Alternativas"}>
            <ChoiceConfig
              question = {question}
              setChoice = {setChoice}
              setChoices = {setChoices}
            />
          </Collapsible>    
        </div>
      ))}
    </div>
  )  
}

export default QuestionConfig;