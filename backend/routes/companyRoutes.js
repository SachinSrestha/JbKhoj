import express from "express";
const router = express.Router();
import {registerCompany, getCompany, getCompanyById,updateCompany} from "../controllers/companyContoller.js";
import { isAuth } from "../middleware/isAuthenticated.js";
import {uploadFile } from "../middleware/multer.js"

router.route("/register").post(isAuth, uploadFile,registerCompany);
router.route("/mycompanies").get(isAuth, getCompany);
router.route("/getcompany/:id").get(isAuth, getCompanyById);
router.route("/updatecompany/:id").put(isAuth, uploadFile,updateCompany);

export default router;