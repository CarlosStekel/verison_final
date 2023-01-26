import { Form } from "react-bootstrap"

const Input = ({ lname, type = "text", name, value, onChange, enabled = true, id}) => {
  if(enabled) {
    if(type === "checkbox" && value) {
      return(
        <Form.Check 
          type="checkbox" 
          label={lname}
          name = {name}
          value = {value}
          onChange = {onChange}
          checked
        /> 
      )
    } else if (type === "checkbox") {
      return(
        <Form.Check 
          type="checkbox" 
          label={lname}
          name = {name}
          value = {value}
          onChange = {onChange}
        />  
      )
    }
    return(
      <Form.Group className="mb-2">
        <Form.Label> {lname} </Form.Label>
        <Form.Control
          id = {id}
          type = {type}
          name = {name}
          value = {value}
          onChange = {onChange}  
        />
      </Form.Group>
    )
  } else {
    return(
      <Form.Group className="mb-2">
        <Form.Label> {lname} </Form.Label>
        <Form.Control
          id = {id}
          type = {type}
          name = {name}
          value = {value}
          onChange = {onChange}
          disabled  
        />
      </Form.Group>
    )
  }   
}

export default Input