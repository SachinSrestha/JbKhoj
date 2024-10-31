import express from "express";
const router = express.Router();
import { postJob, getAllJobs } from "../controllers/jobController.js";
import { isAuth } from "../middleware/isAuthenticated.js";

router.route("/post").post(isAuth, postJob);
router.route("/getjob").get(isAuth, getAllJobs);

export default router;