import express from "express";
const router = express.Router();
import {registerCompany, getCompany, getCompanyById,updateCompany} from "../controllers/companyContoller.js";
import { isAuth } from "../middleware/isAuthenticated.js";

router.route("/register").post(isAuth, registerCompany);
router.route("/mycompanies").get(isAuth, getCompany);
router.route("/getcompany/:id").get(isAuth, getCompanyById);
router.route("/updatecompany/:id").put(isAuth, updateCompany);

export default router;