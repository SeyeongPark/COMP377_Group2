import { Alert, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === undefined || file.length === 0) {
      alert("You should choose an image!");
      return;
    }

    setImage(<img alt="not fount" src={URL.createObjectURL(file[0])} />);
    console.log('Send Data is: ',file[0].name)

    axios.post(`http://localhost:5000/predict`, { link : file[0].name })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  const handleUpload = async (e) => {
    setFile(e.target.files);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="p-2">
        <Navbar.Brand href="#">COMP 377 - Group 2</Navbar.Brand>
      </Navbar>
      <Container>
        <form onSubmit={handleSubmit}>
          <section className="center">😡🤢😱😊😐😔😲 Emotion Detection</section>
          <div className="row">
            <div className="col-6">
              <Form.Group className="position-relative mb-3">
                <Form.Control
                  type="file"
                  onChange={handleUpload}
                  accept=".jpg,.jpeg"
                />
              </Form.Group>
            </div>
            <div className="col-6">{image}</div>
          </div>

          <Button type="submit">Upload and get result</Button>
        </form>
        
      </Container>
    </div>
  );
}

export default App;
