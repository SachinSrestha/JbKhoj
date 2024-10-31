import express from "express";
const router = express.Router();
import { postJob, getAllJobs, getJobById ,getAdminJobs} from "../controllers/jobController.js";
import { isAuth } from "../middleware/isAuthenticated.js";

router.route("/post").post(isAuth, postJob);
router.route("/getjobs").get(isAuth, getAllJobs);
router.route("/getjob/:id").get(isAuth, getJobById);
router.route("/getadminjobs").get(isAuth, getAdminJobs);

export default router;