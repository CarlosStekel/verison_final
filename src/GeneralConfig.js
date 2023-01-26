import ObjectForm from "./Components/ObjectForm"

const GeneralConfig = ({genConfig, setGenConfig, districts}) => {
  return (
    <ObjectForm
      obj = {genConfig}
      lnames = {[
        "Campo de Identificación", 
        "Url de Urna", 
        "Home Url", 
        "Url de Encriptador", 
        "Url de Boletin",
        "Zona Horaria",
        "Templates",
        "Contacto",
        "Distrito por Defecto",
        "Tiempo Salvo Conducto",
        "Configuracion Avanzada"
      ]}
      types = {["text", "text", "text", "text", "text", ["Santiago/Chile", "ej"], "text", "text", districts.map((Dis) => (Dis._id)), "text", "text"]}
      onChange = {["default", "default", "default", "default", "default", "default", "default", "default", "default", "number", "default"]}
      visible = {[true, true, true, true, true, true, true, false, true, true, false]}
      enabled = {[true, true, true, true, true, true, true, true, true, true, true]}
      setObj = {setGenConfig} 
    />
  )
}
  
  export default GeneralConfig