import ObjectForm from "./Components/ObjectForm";
import ObjectHandler from "./Components/ObjectHandler";

const BallotboxConfig = ({district, setBallotBox, setBallotBoxes}) => {
  return (
    <div>
      <ObjectHandler
        defaultObj = {{
          _id : "BX01",
          name : "mesa",
          description : "mesa de votación",
          ballotbox_type : "electronic"
        }}    
        idGen = {district._id + "_BX"}
        currList = {district.ballotboxes}
        updateList = {ballotbox  => setBallotBoxes(ballotbox, district._id)}
      />
      {district.ballotboxes.map((ballotbox) => (
        <ObjectForm
          key = {ballotbox._id}
          obj = {ballotbox}
          lnames = {["Id", "Nombre", "Descripción", "Tipo de Urna"]}
          types = {["text", "text", "text", ["Electronic"]]}
          onChange = {["default", "default", "default", "default"]}
          enabled = {[false, true, true, true]}
          visible = {[true, true, true, true]}
          setObj = {ballotbox => setBallotBox(ballotbox)}
        />
      ))}
    </div>
  )  
}

export default BallotboxConfig;