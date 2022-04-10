import { Alert, Button, Container, Form, Navbar } from "react-bootstrap";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularIndeterminate from "./CircularIndeterminate";

function App() {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState();
  const [predictResult, setpredictResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === undefined || file.length === 0) {
      alert("You should choose an image!");
      return;
    }
    setIsLoading(true);
    setImage(<img alt="not fount" src={URL.createObjectURL(file[0])} />);

    const formData = new FormData()
    formData.append('image', file[0])

    axios
      .post('http://localhost:5000/predict', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then((res) => {
        setpredictResult(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };

  const handleUpload = async (e) => {
    setFile(e.target.files);
  };

  const handleReset = () => {
    setFile([]);
    setImage([]);
    setpredictResult();
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
          <Button type="reset" className="ms-2" onClick={handleReset}>
            Clear result
          </Button>
        </form>
        {isLoading &&  <section className="center"><CircularIndeterminate /></section> }
        {predictResult && (
          <Alert variant="success" className="mt-5">
            <Alert.Heading>Emotion Detected!</Alert.Heading>
            <p>The emotion for this image is: {predictResult}</p>
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default App;
