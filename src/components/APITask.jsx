import axios from "axios";
import { useState } from "react";
import Tesseract from "tesseract.js";

const APITask = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleImageUpload = async (event) => {
    const uploadedImage = event.target.files[0];
    setImage(URL.createObjectURL(uploadedImage));

    await performOCR(uploadedImage);
  };

  const performOCR = async (uploadedImage) => {
    Tesseract.recognize(uploadedImage, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      const parseData = JSON.stringify(text);
      setExtractedText(parseData);
    });
  };

  const sendDataToServer = () => {
    console.log(extractedText);
    const data = {
      textData: extractedText,
    };

    // Send data to the server using Axios or fetch API
    axios
      .post("your_server_api_url", data)
      .then((response) => {
        console.log("Data sent to the server:", response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <input type="file" onChange={handleImageUpload} />
      {image && (
        <img src={image} alt="Uploaded" style={{ maxWidth: "300px" }} />
      )}
      <button onClick={sendDataToServer}>Send Data to Server</button>
    </div>
  );
};

export default APITask;
