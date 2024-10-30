import express from "express";
const router = express.Router();
import {register, login, logout, updateProfile} from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuthenticated.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/updateprofile").put(isAuth, updateProfile);

export default router;