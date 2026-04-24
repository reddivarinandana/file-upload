import { useState } from "react";
import axios from "axios";
import "./upload.css";

function FileUpload({ refreshFiles }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      alert("Uploaded successfully!");
      refreshFiles();
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        className="upload-input"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="upload-btn"
        onClick={handleUpload}
        disabled={!file}
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;

// import { useState } from "react";
// import axios from "axios";

// function FileUpload({ refreshFiles }) {
//   const [file, setFile] = useState(null);

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       await axios.post("http://localhost:5000/upload", formData);
//       alert("Uploaded successfully!");

//       refreshFiles(); // 🔥 refresh list after upload
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <br /><br />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default FileUpload;