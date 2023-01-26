import { Form } from "react-bootstrap"

const SelectInput = ({ lname, name, value, onChange}) => {
    return(
      <Form.Select onChange={onChange} name = {name}>
        <option value = {'null'}> {lname + ":"}</option>
        {value.map((value) => (
          <option key={value}> {value} </option>
        ))}
      </Form.Select>
 
    ) 
  }
  export default SelectInput