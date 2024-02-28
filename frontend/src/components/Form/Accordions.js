import Accordion from 'react-bootstrap/Accordion';
import Formsignin from './Formsignin';
import Formsignup from './Formsignup';

function Accordions() {
  return (
    <div className='container w-70'>
      <Accordion  defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header id='accordion'> Already a member Sign-in </Accordion.Header>
        <Accordion.Body>
         <Formsignin/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header id='accordion'>Create an account  Click here </Accordion.Header>
        <Accordion.Body>
         <Formsignup/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accordions;