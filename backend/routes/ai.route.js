import express from "express";
//import { enhanceDescription } from "../controllers/ai.controller.js";
import { enhanceDescription, analyzeCoverLetter } from "../controllers/ai.controller.js";

const router = express.Router();

router.route("/enhance-description").post(enhanceDescription);
router.route("/analyze-cover-letter").post(analyzeCoverLetter);

export default router;