import express from "express";
import {
  authUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
} from "./../controllers/User.js";
const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/auth", authUser);

export { router as UserRoute };
