import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { fetchProfileByName } from '../utils/fetchProfile';

function StaffNameInput({setDetailIsStaff, setDetailName, setCanSignUp}) {
  const [validated, setValidated] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const [username, setUsername] = useState('');
  const [userError, setUserError] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } 
    if (username.length > 0) {
        event.preventDefault();
        event.stopPropagation();

        fetchProfileByName(username)
        .then(({data})=>{
            if (data.length === 0) {
                setValidated(true);
                setCanSignUp(true);
                setDetailName(username);
                setDetailIsStaff(isStaff);
            } else {
                setUserError(`( username '${username}' already exists )`);
                setValidated(false);
            }
        }).catch((err)=>{
            setUserError(`( Error checking username availability )`);
        });
    } else {
        setValidated(true);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Enter Username*<p className='userError'>{userError}</p></Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter username..."
              aria-describedby="inputGroupPrepend"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
 
      <Form.Group className="mb-3">
        <Form.Check
          label="Check box if you are a staff member."
          feedback="You must agree before submitting."
          feedbackType="invalid"
          checked={isStaff}
          onChange={(e)=>setIsStaff(e.target.checked)}
        />
      </Form.Group>

      <Button type="submit" 
      onClick={()=>{
        console.log(username)
        console.log(isStaff)
      }}
      >Next</Button>
    </Form>
  );
}

export default StaffNameInput;