---

# 📁 CRUD App with Image Upload

## ✨ Overview

This project is a web application built using modern technologies to provide a robust and scalable solution. The app includes image uploading, session management, dynamic data rendering, and much more!

### 🚀 Technologies Used:
- **Node.js** 🟩 (Core)
- **Express.js** ⚡ (Framework)
- **MongoDB** 🗃️ (Database)
- **Mongoose** 📦 (Object Data Modeling - ODM)
- **EJS** 🖋️ (Templating Engine)
- **Multer** 📸 (Image Uploading)
- **Dotenv** 🔑 (Environment Variables)
- **Express Session** 🛠️ (Session Management)
- **Nodemon** 🔄 (Local development)
- **Bootstrap 5** 💅 (UI Framework)
- **DataTables** 📊 (Pagination)
- **Font Awesome** 🎨 (Icons)

---

## ⚡ Features

- **Dynamic Content Rendering** 🖥️: Uses EJS templating engine for server-side rendering of dynamic HTML.
- **Image Uploading** 📸: Implements file upload functionality via Multer.
- **Session Management** 🔒: Secure session handling using Express Session.
- **Database Integration** 🗂️: MongoDB with Mongoose for easy interaction and storage of data.
- **Data Table Pagination** 📅: DataTables for sorting, filtering, and paginating large datasets.
- **Responsive Design** 📱: Fully responsive UI with Bootstrap 5 for a seamless experience across devices.
- **Environment Variables** 🌱: Configuration of sensitive data via Dotenv.

---

## 🛠️ Installation

### 📋 Prerequisites:
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) 🟩
- [MongoDB](https://www.mongodb.com/try/download/community) 🗃️

### 🔧 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/project-name.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd project-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```text
   DB_URI=mongodb://localhost:27017/your-database-name
   SESSION_SECRET=your-session-secret
   ```

5. **Start the application in development mode**:
   ```bash
   npm run dev
   ```
   This runs the app with **Nodemon**, which automatically restarts the server on file changes.

---

## 🌐 Usage

- **Access the app**: Open `http://localhost:3000` in your browser.
- **Features**: Upload images, view data with pagination, and interact with dynamic pages.
- **Session Management**: Use Express Session for managing user logins and displaying messages.

---

## 🧰 Technologies & Tools

- **Node.js** 🟩: The core JavaScript runtime for building backend services.
- **Express.js** ⚡: A fast, minimal web framework for Node.js.
- **MongoDB** 🗃️: NoSQL database used for storing application data.
- **Mongoose** 📦: ODM library to interact with MongoDB in a more structured way.
- **EJS** 🖋️: Templating engine for rendering dynamic content in HTML views.
- **Multer** 📸: Middleware for handling image/file uploads.
- **Dotenv** 🔑: Loads environment variables from a `.env` file.
- **Express Session** 🛠️: For handling sessions and managing user states.
- **Nodemon** 🔄: Automatically restarts the server during development.
- **Bootstrap 5** 💅: Responsive, mobile-first front-end framework.
- **DataTables** 📊: Table plugin for advanced table features like pagination and sorting.
- **Font Awesome** 🎨: Provides scalable vector icons for UI design.

---

## 🧑‍🤝‍🧑 Contributing

1. **Fork** the repository.
2. Create a new **branch** (`git checkout -b feature/your-feature`).
3. **Commit** your changes (`git commit -m 'Add your feature'`).
4. **Push** to your branch (`git push origin feature/your-feature`).
5. Open a **pull request**.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Acknowledgements

- **Express.js** ⚡: For providing a fast and minimalist web framework.
- **MongoDB** 🗃️: For providing a flexible, scalable NoSQL database solution.
- **Mongoose** 📦: For simplifying MongoDB operations with object modeling.
- **Bootstrap 5** 💅: For an elegant and responsive front-end framework.
- **Font Awesome** 🎨: For beautiful, scalable icons to enhance UI.
- **DataTables** 📊: For advanced features in table data presentation.

---