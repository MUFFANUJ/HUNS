import React, { useState ,useRef} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { IoMdArrowRoundBack, IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xdkkrkr', 'template_pxvq4y4', form.current, 'YYHtgp7__9NHK6z2K')
    .then((result) => {
      console.log("Successfully send")
      form.current.reset();
    }, (error) => {
      console.log("Unsuccessful" + error.text);
      form.current.reset();
    });
  };

  return (
    <Container className="mt-5">
      <div onClick={()=> navigate("/HUNS")} style={{margin:"40px"}}><IoMdArrowRoundBack size={30}/></div>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1>Contact Us</h1>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter your name"

                name="name"
                // value={formData.name}
                type="text" name="user_name"
                

                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                placeholder="Enter your email"

                name="email"
                // value={formData.email}

                type="email" name="user_email"


                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                name="message"
                // value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3" value="Send">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
