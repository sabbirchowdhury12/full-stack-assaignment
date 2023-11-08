import { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [name, setName] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [referenceLink, setReferenceLink] = useState(null);

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>QR Code Generator</h2>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          style={{ padding: "6px", margin: "4px" }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="inputValue">Input:</label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          style={{ padding: "6px", margin: "4px" }}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="referenceLink">Reference:</label>
        <input
          type="text"
          id="referenceLink"
          value={referenceLink}
          style={{ padding: "6px", margin: "4px", marginBottom: "20px" }}
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
