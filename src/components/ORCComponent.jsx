import { useState } from "react";
import Tesseract from "tesseract.js";
import Dropzone from "react-dropzone";

const OCRComponent = () => {
  const [imageText, setImageText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const dropBoxStyles = {
    border: "2px dashed #ccc",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  };

  const handleImageUpload = (acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(imageFile));
    performOCR(imageFile);
  };

  const performOCR = (imageFile) => {
    Tesseract.recognize(imageFile, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setImageText(text);
    });
  };

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => handleImageUpload(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} style={dropBoxStyles}>
              <input {...getInputProps()} />
              <p>Drag drop an image file here, or click to select one</p>
            </div>
          </section>
        )}
      </Dropzone>
      {uploadedImage && (
        <img
          src={uploadedImage}
          style={{ overflow: "scroll", maxHeight: "500px" }}
          alt="Uploaded"
        />
      )}
      <div>
        <h3>Recognized Text:</h3>
        <p
          className="border"
          style={{ border: "1px solid black", padding: "20px" }}
        >
          {imageText}
        </p>
      </div>
    </div>
  );
};

export default OCRComponent;
