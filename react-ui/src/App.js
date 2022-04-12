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
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="center">😐😡😲 Emotion Detection 😔😱😊</h2>

          <table>
            <thead>
              <tr>
                <th className="left-col">
                    <Form.Group>
                      <Form.Control
                        type="file"
                        onChange={handleUpload}
                        accept=".jpg,.jpeg"
                      />
                    </Form.Group>
                </th>
                <th rowspan="2" className="right-col">
                   {image} 
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Button type="submit">Upload and get result</Button>
                  <Button type="reset" onClick={handleReset}>
                    Clear result
                  </Button>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>

        </form>
        {isLoading &&  <section className="center"><CircularIndeterminate /></section> }
        {predictResult && (
          <Alert variant="success" className="mt-5">
            <Alert.Heading>Emotion Detected!</Alert.Heading>
            <p>The emotion for this image is: {predictResult}</p>
          </Alert>
        )}
      </div>
    </div>
  );
}

export default App;



