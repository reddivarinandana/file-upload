import { useEffect, useState } from "react";
import axios from "axios";
import FileUpload from "./upload";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);

  const getFiles = async () => {
    const res = await axios.get("http://localhost:5000/files");
    setFiles(res.data);
  };

  const deleteFile = async (fileUrl) => {
  try {
    const filename = fileUrl.split("/uploads/")[1];

    await axios.delete(`http://localhost:5000/delete/${filename}`);

    alert("Are you sure do you want to delete this File");
    getFiles(); // refresh list
  } catch (err) {
    console.error(err);
    alert("Delete failed");
  }
};

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className="container">
      <h2>File Upload App 🚀</h2>

      <div className="upload-box">
        <FileUpload refreshFiles={getFiles} />
      </div>

      <h3>Uploaded Files</h3>

      <div className="file-grid">
        {files.map((file, index) => (
  <div key={index} className="file-card">
    <img src={file} alt="file" />

    <div className="btn-group">
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="view-btn"
              >
                View
              </a>

              <button
                className="delete-btn"
                onClick={() => deleteFile(file)}
              >
                Delete
              </button>
            </div>

  </div>
))}
      </div>
    </div>
  );
}

export default App;