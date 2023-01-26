import "./style.css"
import Input from "./Input"
import SelectInput from "./SelectInput"
import Form from 'react-bootstrap/Form';

const ObjectForm = ({obj, lnames, types, onChange, enabled, visible, setObj}) => {

  function change(e) {
    const newChoice = {
      ...obj,
      [e.target.name]: e.target.value,
    }
    setObj(newChoice);
  }

  function changeBox(e) {
    const newChoice = {
      ...obj,
      [e.target.name]: e.target.checked,
    }
    setObj(newChoice);
  }

  function changeNumber(e){
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      const newSelf = {
        ...obj,
        [e.target.name]: parseInt(e.target.value),
      }
      setObj(newSelf)
    }
    if (e.target.value === '') {
      const newSelf = {
        ...obj,
        [e.target.name]: e.target.value,
      }
      setObj(newSelf)
    }
  }

  function createInput(key, index) {
    if (visible[index]) {
      if(typeof(types[index]) !== 'object') {
        switch(onChange[index]) {  
          case "number":
            return(
              <Input
                key = {key}
                id = {key + '_' + obj._id}    
                lname = {lnames[index]}
                type = {types[index]}
                name = {key}
                value = {obj[key]}
                onChange = {changeNumber}
                enabled = {enabled[index]}  
              />
            )
          case "checkbox":
            return(
              <Input
                key = {key}
                id = {key + '_' + obj._id}    
                lname = {lnames[index]}
                type = {types[index]}
                name = {key}
                value = {obj[key]}
                onChange = {changeBox}
                enabled = {enabled[index]}   
              />
            ) 
          case "default":
            return(
              <Input
                key = {key}
                id = {key + '_' + obj._id}   
                lname = {lnames[index]}
                type = {types[index]}
                name = {key}
                value = {obj[key]}
                onChange = {change}
                enabled = {enabled[index]}  
              />
            )   
        }  
      } else {
        return (
          <SelectInput
            key = {key}
            lname = {lnames[index]}
            name = {key}
            value = {types[index]}
            onChange = {change}
          />
        )
      }     
    }
  }
  
    
  return(
    <div>
      <Form autoComplete='off'>
        {Object.keys(obj).map((key, index) => (
          createInput(key, index)
        ))}
      </Form>
    </div>
  )  
}

export default ObjectForm