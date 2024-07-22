import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import inotesGif from '../inotes.gif'; 
import './About.css'; 
const About = () => {
  return (
    <Container className="mt-5 about-container">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 mb-3">About iNotes</h1>
          <p className="lead">
            Welcome to iNotes, your go-to application for managing and organizing your notes efficiently and effectively.
          </p>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col md={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-lg border-0 d-flex flex-column">
            <Card.Img variant="top" src={inotesGif} alt="iNotes Overview" className="img-fluid about-image" />
            <Card.Body className="flex-grow-1">
              <Card.Title as="h2">What is iNotes?</Card.Title>
              <Card.Text>
                iNotes is a powerful and user-friendly note-taking application designed to help you capture, manage, and organize your thoughts and ideas. Whether you need a simple way to jot down quick reminders or a more sophisticated tool for detailed note-taking, iNotes has got you covered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-lg border-0 d-flex flex-column">
            <Card.Body className="flex-grow-1">
              <Card.Title as="h2">Features</Card.Title>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle me-2"></i> <strong>Easy Note Management:</strong> Create, edit, and delete notes effortlessly. Organize your notes with tags for easy retrieval.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>User-Friendly Interface:</strong> Enjoy a clean and intuitive design that makes note-taking a breeze.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Secure Authentication:</strong> Your notes are protected by secure authentication, ensuring only you have access to your data.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Responsive Design:</strong> Access your notes from any device, whether you're using a computer, tablet, or smartphone.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Customizable:</strong> Tailor your note-taking experience with personalized settings and preferences.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Advanced Search:</strong> Quickly find the notes you need with our powerful search functionality.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Real-Time Sync:</strong> Sync your notes across all devices in real-time, ensuring you always have the latest information at your fingertips.</li>
                <li><i className="bi bi-check-circle me-2"></i> <strong>Rich Text Editing:</strong> Format your notes with a variety of text styles, bullet points, and more to enhance readability and organization.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col>
          <h2>How It Works</h2>
          <p>
            Getting started with iNotes is simple. Just sign up for an account, log in, and start creating notes. You can easily update and manage your notes through our intuitive interface. Our application automatically saves your changes, so you don’t have to worry about losing any important information.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title as="h2">Our Mission</Card.Title>
              <Card.Text>
                At iNotes, our mission is to provide a reliable and efficient tool that helps users streamline their note-taking process. We believe that effective note management can significantly improve productivity and organization, and we strive to make this process as smooth and enjoyable as possible for our users.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2>Contact Us</h2>
          <p>
            We’re always here to help! If you have any questions, feedback, or suggestions, feel free to reach out to us at <a href="mailto:sanjeev061072@gmail.com">Rajat Gupta</a>. We value your input and are committed to improving our application to better serve your needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
