import { Form } from "react-bootstrap"

const SelectInput = ({ lname, name, value, onChange}) => {
    return(
      <Form.Group>
        <Form.Label> {lname} </Form.Label>
        <Form.Select onChange={onChange} name = {name}>
          <option value = {'null'}> {"---"}</option>
          {value.map((value) => (
            <option key={value}> {value} </option>
          ))}
        </Form.Select>
      </Form.Group>
 
    ) 
  }
  export default SelectInput