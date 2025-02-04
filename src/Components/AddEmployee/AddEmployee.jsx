import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './AddEmployee.css';  
import { useState } from 'react';
import { saveEmployeeToDatabase } from '../../Service/Employee/employee';
import '../Assets/common.css';
import { useNavigate } from 'react-router-dom';


function AddEmployee() {
  const [employeeName, setEmployeeName] = useState("");       
  const [employeeCode, setEmployeeCode] = useState("");       
  const [employeeEmail, setEmployeeEmail] = useState("");     
  const [employeePassword, setEmployeePassword] = useState("");  
  
  const [employeeNameError, setEmployeeNameError] = useState(false);   
  const [employeeCodeError, setEmployeeCodeError] = useState(false);   
  const [employeeEmailError, setEmployeeEmailError] = useState(false); 
  const [employeePasswordError, setEmployeePasswordError] = useState(false);


  let navigate = useNavigate()


   const handelNameChange=(e)=>{
    setEmployeeName(e.target.value)
    setEmployeeNameError(false)
   } 
const handleChangeInEmployeeCode=(e)=>{
    setEmployeeCode(e.target.value)
    setEmployeeCodeError(false)
}
const handleEmailChange=(e)=>{
    setEmployeeEmail(e.target.value)
    setEmployeeEmailError(false)
}
const handlePasswordChange=(e)=>{
    setEmployeePassword(e.target.value)
    setEmployeePasswordError(false)

    
}

const handleCancel=()=>{
    setEmployeeNameError(false);
    setEmployeeCodeError(false);
    setEmployeeEmailError(false);
    setEmployeePasswordError(false);
    setEmployeeName('')
    setEmployeeCode('')
    setEmployeeEmail('')
    setEmployeePassword('')

}
  
  const validateEmployeeName = (name) => {
    const regex = /^[a-zA-Z0-9 _-]+$/;
    return regex.test(name);  
  };

  const validateEmployeeCode = (code) => {
    const regex = /^[a-zA-Z0-9]+$/;  
    return regex.test(code);  
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);  
  };

  const validatePassword = (password) => {
    return password.length >= 6;  
  };

  const handleSubmit = (e) => {
    e.preventDefault();  

    let nameValid = validateEmployeeName(employeeName);  
    let codeValid = validateEmployeeCode(employeeCode);  
    let emailValid = validateEmail(employeeEmail);      
    let passwordValid = validatePassword(employeePassword);  

    setEmployeeNameError(!nameValid);  
    setEmployeeCodeError(!codeValid);  
    setEmployeeEmailError(!emailValid);  
    setEmployeePasswordError(!passwordValid);  

    if (nameValid && codeValid && emailValid && passwordValid) {

      
      saveEmployeeToDatabase(employeeCode, employeeName, employeeEmail, employeePassword)

        .then((response) => {
        //  console.log(response);
         
          alert('Employee added successfully!');
          navigate("/list")
          setEmployeeName("");  
          setEmployeeCode("");  
          setEmployeeEmail("");  
          setEmployeePassword(""); 
     
        })
   
       
        .catch((error) => {
        //   console.error(error);  
          alert('Failed to add employee!');  
        });
      
    }
  };

  return (
    <div className="centered-container">
      <Card className="form-card">
        <Card.Body>
        <h3 className="text-center mb-4">Add Employee</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicname">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Employee Name"
                value={employeeName}
                onChange={(e) => handelNameChange(e)}
                className={employeeNameError ? 'is-invalid' : ''}
              />
              {employeeNameError && (
                <div className="invalid-feedback">Only letters, numbers, hyphen and underscore allowed.</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasiccode">
              <Form.Label>Employee Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Employee Code"
                value={employeeCode}
                onChange={(e) => handleChangeInEmployeeCode(e)}
                className={employeeCodeError ? 'is-invalid' : ''}
              />
              {employeeCodeError && (
                <div className="invalid-feedback">Only alphanumeric characters are allowed.</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={employeeEmail}
                onChange={(e) => handleEmailChange(e)}
                className={employeeEmailError ? 'is-invalid' : ''}
              />
              {employeeEmailError && (
                <div className="invalid-feedback">Please enter a valid email address.</div>
              )}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={employeePassword}
                onChange={(e) => handlePasswordChange(e)}
                className={employeePasswordError ? 'is-invalid' : ''}
              />
              {employeePasswordError && (
                <div className="invalid-feedback">Password must be at least 7 characters long.</div>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add Employee
            </Button>

            <Button style={{ marginLeft: "5px" }} variant="secondary" type="button" className="ml-3" onClick={handleCancel}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddEmployee;
