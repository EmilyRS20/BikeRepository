import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here
  }

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md="6" lg="4">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required />
            </FormGroup>
            <Button type="submit" color="primary" block>Login</Button>
          </Form>
          <div className="mt-2 text-center">
            Don't have an account? <Link to="/Signup">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;



