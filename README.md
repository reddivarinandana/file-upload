# file-upload

# 📁 Full Stack File Upload App 🚀

A simple full-stack application to **upload, view, and delete files** using React and Node.js.

---

## 🧩 Tech Stack

* **Frontend:** React, CSS
* **Backend:** Node.js, Express
* **File Upload:** Multer
* **HTTP Client:** Axios

---

## ✨ Features

* 📤 Upload files from UI
* 📁 Store files locally in backend
* 🖼️ Preview uploaded images
* 🔗 View files in browser
* ❌ Delete uploaded files
* 📊 Display files in grid (6 per row)
* 🎨 Clean UI with styled buttons

---

## 📂 Project Structure

```
file-upload-app/
 ├── backend/
 │    ├── uploads/
 │    ├── server.js
 │    └── package.json
 └── client/
      ├── src/
      │    ├── App.js
      │    ├── upload.js
      │    ├── App.css
      │    └── upload.css
      └── package.json
```

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

### ▶️ Run backend

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 🎨 Frontend Setup

```bash
cd client
npm install
```

### ▶️ Run frontend

```bash
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔄 How It Works

1. User selects file from UI
2. React sends file using `FormData`
3. Backend receives file via Multer
4. File is stored in `backend/uploads/`
5. Files are fetched and displayed in UI
6. User can view or delete files

---

## 🌐 API Endpoints

### 📤 Upload File

```
POST /upload
```

### 📁 Get All Files

```
GET /files
```

### ❌ Delete File

```
DELETE /delete/:filename
```

---

## 🖼️ UI Features

* Files displayed in **grid layout (6 per row)**
* Image preview inside cards
* Buttons:

  * 🟢 View (open file)
  * 🔴 Delete (remove file)

---

## 📌 Important Notes

* Files are stored locally in:

```
backend/uploads/
```

* Access files in browser:

```
http://localhost:5000/uploads/<filename>
```


## 👩‍💻 Author

**Reddivari Nandana**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
