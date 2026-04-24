// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// // Storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Upload API
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.json({
//     message: "File uploaded successfully",
//     file: req.file,
//   });
// });

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// ✅ Serve uploaded files (important)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Upload API
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    fileName: req.file.filename,
    fileUrl: `http://localhost:5000/uploads/${req.file.filename}`,
  });
});

// ✅ Get all uploaded files
app.get("/files", (req, res) => {
  const uploadsPath = path.join(__dirname, "uploads");

  fs.readdir(uploadsPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read files" });
    }

    const fileUrls = files.map(
      (file) => `http://localhost:5000/uploads/${file}`
    );

    res.json(fileUrls);
  });
});

// ✅ Delete file (optional but useful)
app.delete("/delete/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ error: "File not found" });
    }

    res.json({ message: "File deleted successfully" });
  });
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});