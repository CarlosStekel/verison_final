import ObjectForm from "./Components/ObjectForm"

const AdvancedConfig = ({advancedConfig, setAdvConfig}) => {
  return (
    <ObjectForm
      obj = {advancedConfig}
      lnames= {[
        "factor",
        "registration_required",
        "can_choose_ballotbox",
        "open_registration",
        "default_state",
        "identity_regex",
        "restricted",
        "weighted",
        "listed",
        "paper",
        "result_delay",
        "max_ips",
        "max_registrations",
        "captcharue",
        "saltlegacysalt",
        "count_votes_resolution_seconds600"
      ]}
      types = {["text", "checkbox", "checkbox", "checkbox", "text", "text", "checkbox", "checkbox", "checkbox", "checkbox", "text", "text", "text", "checkbox", "text", "text"]}
      onChange = {["number", "checkbox", "checkbox", "checkbox", "default", "default", "checkbox", "checkbox", "checkbox", "checkbox", "number", "number", "number", "checkbox", "default", "number"]}
      visible = {[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]}
      enabled = {[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]}
      setObj = {setAdvConfig}
    />
  )
}

export default AdvancedConfig