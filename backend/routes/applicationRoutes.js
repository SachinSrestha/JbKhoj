import express from "express";
const router = express.Router();
import { applyJob, getAppliedJobs ,getApplicants, updateStatus} from "../controllers/applicationController.js";
import { isAuth } from "../middleware/isAuthenticated.js";

router.route("/apply/:id").get(isAuth, applyJob);
router.route("/getappliedjobs").get(isAuth, getAppliedJobs);
router.route("/getapplicants/:id").get(isAuth, getApplicants);
router.route("/updatestatus/:id").put(isAuth, updateStatus);

export default router;