import { Alert, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([{}]);
  const [file, setFile] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === undefined || file.length === 0) {
      alert("You should choose an image!");
      return;
    }

    setSelectedImage(file[0]);
    setImage(<img alt="not fount" src={URL.createObjectURL(file[0])} />);

    console.log(file);
    console.log(file[0]);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file[0].name);
    // try {
    //   const response = await api.fileUploadToServer(formData);
    //   console.log(response);
    // } catch (ex) {
    //   console.log(ex);
    // }
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
        {typeof data.members === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => <p key={i}>{member}</p>)
        )}
      </Container>
    </div>
  );
}

export default App;
