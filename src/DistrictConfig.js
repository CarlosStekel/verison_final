import BallotboxConfig from "./BallotboxConfig";
import Collapsible from "./Components/Collapsible";
import ObjectForm from "./Components/ObjectForm";
import ObjectHandler from "./Components/ObjectHandler";

const DistrictConfig = ({districts ,setDistrict, setDistricts}) => {

  function setBallotBox(ballotbox, dId) {
    const dIndex = districts.findIndex(D => D._id === dId);
    const bIndex = districts[dIndex].ballotboxes.findIndex(B => B._id === ballotbox._id);
    const newBallotbox = [...districts[dIndex].ballotboxes.slice(0, bIndex), ballotbox, ...districts[dIndex].ballotboxes.slice(bIndex + 1)]
    const newDistrict = {...districts[dIndex], ballotboxes: newBallotbox}
    const newDistricts = [...districts.slice(0, dIndex), newDistrict, ...districts.slice(dIndex + 1)]
    setDistricts(newDistricts)
  }
  
  function setBallotBoxes(ballotbox, dId) {
    const dIndex = districts.findIndex(D => D._id === dId)
    const newDistrict = {...districts[dIndex], ballotboxes: ballotbox}
    const newDistricts = [...districts.slice(0, dIndex), newDistrict, ...districts.slice(dIndex + 1)]
    setDistricts(newDistricts)
  }

  return (
    <div>
      <ObjectHandler
        defaultObj = {{
          _id : "D1",
          name : "Nombre Distrito",
          description : "Descripcion Distrito",
          ballotboxes : [],
          default_ballotbox_id : null,
          question_ids : []
        }}
        idGen = {"D"}
        currList = {districts}
        updateList = {setDistricts}
      />
    {districts.map((district) => (
      <div key = {district._id}>
        <ObjectForm
          obj = {district}
          lnames ={["Id", "Nombre", "Descripción", "Urnas", "Urna por Defecto", "---"]}
          types = {['text', 'text', 'text' ,'text', district.ballotboxes.map((BX) => (BX._id)), 'text']}
          onChange = {["default", "default", "default", "default", "", "default"]}
          enabled = {[false, true, true ,true, true, true]}
          visible = {[true, true, true ,false, true, false]}
          setObj = {setDistrict}
        />
        <Collapsible title={"Configuración de Urnas"}>
          <BallotboxConfig
            district = {district}
            setBallotBox = {(ballotbox) => setBallotBox(ballotbox, district._id)}
            setBallotBoxes = {(ballotbox) => setBallotBoxes(ballotbox, district._id)}  
          />
        </Collapsible>
      </div>
    ))}
    </div>
  )  
}

export default DistrictConfig;