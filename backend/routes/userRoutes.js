import express from "express";
const router = express.Router();
import {register, login, logout, updateProfile} from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuthenticated.js";
import {uploadFile } from "../middleware/multer.js"

router.route("/register").post( uploadFile, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/updateprofile").put(isAuth, uploadFile,updateProfile);

export default router;