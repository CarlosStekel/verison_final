import Table from 'react-bootstrap/Table';

const DistrictQuestionsHandler = ({questions, districts, updateDistrict}) => {  
  function change(district, qId) {
    if(district.question_ids.includes(qId)) {
      const newQIds = district.question_ids.filter(qid => qid !== qId);
      const newDistrict = {...district, question_ids: newQIds};
      updateDistrict(newDistrict);   
    } else {
      const newQIds = [...district.question_ids, qId]
      const newDistrict = {...district, question_ids: newQIds};
      updateDistrict(newDistrict);   
    }
  }
  
  function generateCheckbox(district, question) {
    if(district.question_ids.includes(question._id)) {  
      return(
        <td key={district._id + "_" + question._id}>
          <input 
            type="checkbox"
            id = {district._id + "_" + question._id}
            value = {district._id + question._id}
            onChange = {() => change(district, question._id)}
            checked
          />
        </td>
      )
    }
    else  {
      return(
        <td key={district._id + "_" + question._id}>
          <input 
            type="checkbox"
            id = {district._id + "_" + question._id}
            value = {district._id + question._id}
            onChange = {() => change(district, question._id)}
          />
        </td>
      )  
    } 
  }
  
  return (
    <div>
      <Table striped bordered size="sm">
        <tbody>  
          <tr>
            <th>Preguntas</th>
            {districts.map((district) => (
              <th key={district._id}> {district._id} </th>  
            ))}
          </tr>
          {questions.map((question) => (
            <tr key={question._id}>
              <th> {question._id} </th>
              {districts.map((district) => (
                generateCheckbox(district, question)  
              ))}
            </tr>
          ))}
        </tbody>  
      </Table>
    </div>
  )
}

export default DistrictQuestionsHandler;