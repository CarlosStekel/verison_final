import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ObjectForm from './Components/ObjectForm';
import AdvancedConfig from './AdvancedConfig';
import DistrictConfig from './DistrictConfig';
import QuestionConfig from './QuestionConfig';
import DistrictQuestionsHandler from './Components/DistricQuestionsHandler';
import { Accordion, Form } from 'react-bootstrap';
import GeneralConfig from './GeneralConfig';

function App() {
  const [self, setSelf] = useState({
    _id : "none",
    name : "Título de la Votación",
    organization_name : "Nombre Organización",
    configuration : {
      identification_field : "run+serial",
      ballot_box_url : "https://ballot-box.evoting.com",
      home_url : "http://www.evoting.com",
      encrypter_url : "https://vote.evoting.com/election/%s",
      bulletin_url : "https://bulletin.evoting.com/%s",
      time_zone : "America/Santiago",
      templates : [ ],
      contact: {
        email: "soporte@evoting.com",
        phone: "+56 2 2712 5000"
      },    default_district_id : "D01",
      safe_conduct_timeout_seconds : 172800,
      advanced_config : {
        factor : 1,
        registration_required : false,
        can_choose_ballotbox : false,
        open_registration : false,
        default_state : "ready",
        identity_regex : ".*",
        restricted : false,
        weighted : false,
        listed : true,
        paper : false,
        result_delay : 0,
        max_ips:0,
        max_registrations:1,
        captcha: true,
        salt: "legacysalt",
        count_votes_resolution_seconds: 3600
      }
    },
    districts : [ {
      _id : "D1",
      name : "Distrito único",
      description : "Distrito único para la votación",
      ballotboxes : [ {
        _id : "D1_BX1",
        name : "mesa única",
        description : "única mesa de votación",
        ballotbox_type : "electronic"
      } ],
      default_ballotbox_id : "D1_BX1",
      question_ids : [ "Q1", "Q2"]
    } ],
    questions : [ {
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
    }, {
      _id : "Q2",
      name : "Pregunta Dos",
      relative_position : 0,
      min_options : 0,
      max_options : 1,
      accept_null : true,
      accept_null_explicit : false,
      accept_blank_explicit : false,
      distributed: false,
      choices : [ {
        name : "Opcion 1, Pregunta dos",
        value : 1,
        absolute_position : 2,
        relative_position : 1,
        write_in: false
      }, {
        name : "Opcion 2, Pregunta dos",
        value : 1,
        absolute_position : 3,
        relative_position : 1,
        write_in: false
      } ],
      lists : [ ]
    }],
    encrypters : [ {
      name : "Encriptador de evoting",
      public_key : "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUxsTA8e5oKRmFMir2F4hIwC2unbBgkJTywrqa9zJWrWH3G+mw7qsaabeCBpUp0BwVisiyteqVbhZwN0DJeGOfg==",
      state : "enabled"
    } ],
    authorization_authorities : [ {
      name : "authentificador de evoting",
      public_key : "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEJ6CVrqN6RZk/TfSuexVxLxMzI2f+B1XOt/Om5XuHMS4NmM7lPLU7/ffMp0Op8PiilC/OdJwWSMXO3+4H2cdCgg==",
      state : "enabled"
    }, {
      name : "authentificador ballotbox",
      public_key : "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAYZ5SoBLxd62H+fXTGU9OIxk50wD1jSqcDvVGzgEEbMRlJzE6HKoBqK3UvpDgM18eZvqWq42uAsLJtgAbT3xTA==",
      state : "enabled"
    }  ],
    mobile_authorities : [ {
      name : "authentificador de evoting",
      public_key : "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEbuO89w/TiBNDYDAl8osaJfSiElL+S8C1/911bIT3+ZslD0FkBuP7lYKY58eMi2lIO0cAPue4Fkg9B4x78HhIBQ==",
      state : "enabled"
    }, {
      name : "myself",
      public_key : "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAYZ5SoBLxd62H+fXTGU9OIxk50wD1jSqcDvVGzgEEbMRlJzE6HKoBqK3UvpDgM18eZvqWq42uAsLJtgAbT3xTA==",
      state : "enabled"
    } ],
    drop_in_places : [ ]
  })

  function preview() {
    alert(JSON.stringify(self, null, 2))
  }

  function change(e) {
    const newSelf = {
      ...self,
      [e.target.name]: e.target.value,
    }
    setSelf(newSelf);
  }

  function setConfig(config) {
    const newSelf = {...self, configuration: config};
    setSelf(newSelf);
  }

  function setAdvConfig(advConfig) {
    const newConfig = {...self.configuration, advanced_config: advConfig}
    const newSelf = {...self, configuration: newConfig};
    setSelf(newSelf);
  }

  function setDistricts(district) {
    const newSelf = {...self, districts: district};
    setSelf(newSelf);
  }

  function setDistrict(district) {
    const index = self.districts.findIndex(D => D._id === district._id)
    const newDistricts = [...self.districts.slice(0, index), district, ...self.districts.slice(index + 1)]
    const newSelf = {...self, districts: newDistricts};
    setSelf(newSelf);
  }

  function setQuestions(question) {
    const newSelf = {...self, questions: question};
    setSelf(newSelf);
  }

  function setQuestion(question) {
    const index = self.questions.findIndex(Q => Q._id === question._id)
    const newQuestions = [...self.questions.slice(0, index), question, ...self.questions.slice(index + 1)]
    const newSelf = {...self, questions: newQuestions};
    setSelf(newSelf);
  }

  return (
    <div className="container">
      <div className="col-my-12 text-center">
        <Button onClick = {preview} variant="outline-secondary" className='mx-2'> Preview </Button>
        <Button> Submit </Button>
      </div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label> Título </Form.Label>
          <Form.Control 
            size='lg'
            value = {self.name}
            name = {"name"}
            onChange = {(e) => (change(e))} 
          />
          <Form.Label> Nombre de Organización </Form.Label>
          <Form.Control 
            size='lg'
            value = {self.organization_name}
            name = {"organization_name"}
            onChange = {(e) => (change(e))} 
          />
        </Form.Group>
      </Form>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> Configuración General </Accordion.Header>
          <Accordion.Body>
            <GeneralConfig
              genConfig = {self.configuration}
              setGenConfig = {setConfig}
              districts = {self.districts}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header> Configuración Avanzada </Accordion.Header>
          <Accordion.Body>
            <AdvancedConfig
              advancedConfig={self.configuration.advanced_config}
              setAdvConfig = {setAdvConfig}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header> Configuración de Distritos </Accordion.Header> 
          <Accordion.Body>
            <DistrictConfig
              districts = {self.districts}
              setDistrict = {setDistrict}
              setDistricts = {setDistricts}  
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header> Configuración de Preguntas </Accordion.Header>
          <Accordion.Body>
            <QuestionConfig
              questions = {self.questions}
              setQuestion = {setQuestion}
              setQuestions = {setQuestions}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header> Asignación de Preguntas </Accordion.Header>
          <Accordion.Body>
            <DistrictQuestionsHandler
              questions = {self.questions}
              districts = {self.districts}
              updateDistrict = {setDistrict}
            />
          </Accordion.Body>
        </Accordion.Item>  
      </Accordion>
    </div>
  );
}

export default App;
