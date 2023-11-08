import { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [referenceLink, setReferenceLink] = useState("");

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          style={{ padding: "4px", margin: "4px" }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="inputValue">Input:</label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          style={{ padding: "4px", margin: "4px" }}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="referenceLink">Reference:</label>
        <input
          type="text"
          id="referenceLink"
          value={referenceLink}
          style={{ padding: "4px", margin: "4px", marginBottom: "20px" }}
          onChange={(e) => setReferenceLink(e.target.value)}
        />
      </div>
      <div>
        <QRCode value={`${name}, ${inputValue}, Reference: ${referenceLink}`} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
