import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
  };

  return (
    <Container className="signup-container">
      <Row>
        <Col>
          <h2>Sign up</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Sign up
            </Button>
            <p className="mt-3">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
