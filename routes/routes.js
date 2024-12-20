import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import User from "../models/user.model.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    extName && mimeType
      ? cb(null, true)
      : cb(new Error("Only images are allowed!"));
  },
});

// Ensure `public/uploads` directory exists
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Home Route: Display Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.render("index", {
      title: "User Management",
      users,
      message: req.session.message || "Manage Users",
    });
    delete req.session.message;
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Add User Route
router
  .route("/add_users")
  .get((req, res) => res.render("add_users", { title: "Add User", error: null }))
  .post(upload.single("image"), async (req, res) => {
    try {
      const { name, email, phone, role } = req.body;

      // Set a default image if no file is uploaded
      const image = req.file ? req.file.filename : "default.jpg";

      const newUser = new User({
        name,
        email,
        phone,
        role,
        image,
      });

      await newUser.save();
      req.session.message = "User added successfully";
      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.render("add_users", { title: "Add User", error: "Error adding user." });
    }
  });

// Edit User Routes
router
  .route("/edit_user/:id")
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send("User not found");
      res.render("edit_user", { title: "Edit User", user, error: null });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  })
  .post(upload.single("image"), async (req, res) => {
    try {
      const { name, email, phone, role } = req.body;

      const updateData = {
        name,
        email,
        phone,
        role,
      };

      if (req.file) {
        updateData.image = req.file.filename;
      }

      await User.findByIdAndUpdate(req.params.id, updateData);
      req.session.message = "User updated successfully";
      res.redirect("/");
    } catch (error) {
      console.error(error);
      const user = await User.findById(req.params.id);
      res.render("edit_user", { title: "Edit User", user, error: "Error updating user." });
    }
  });

// Delete User Route
router.get("/delete_user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    req.session.message = "User deleted successfully";
    res.redirect("/");
  } catch (error) {
    console.error(error);
    const users = await User.find({});
    res.render("index", { title: "User Management", users, error: "Error deleting user." });
  }
});

// Change Permissions Route
router.get("/change_permission/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    if (user.role === "admin") {
      user.role = "user";
    } else {
      const existingAdmin = await User.findOne({ role: "admin" });
      if (existingAdmin) {
        req.session.message = "There is already an admin.";
        return res.redirect("/");
      }
      user.role = "admin";
    }

    await user.save();
    req.session.message = "User role updated successfully";
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.session.message = "Error changing permissions.";
    res.redirect("/");
  }
});

// Route for About
router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Route for Contact
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

router.get("/privacy_policy", (req, res) => {
  res.render("privacy_policy", { title: "Privacy Policy" });
});

// Route for Terms of Service
router.get("/terms_of_service", (req, res) => {
  res.render("terms_of_service", { title: "Terms of Service" });
});

export default router;
