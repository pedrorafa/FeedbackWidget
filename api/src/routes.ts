import express from "express";
import { FeedbackRepository } from "./data/repository/FeedbackRepository";
import { FeedbackService } from "./service/FeedbackService";
import { RequestSubmitFeedback } from "./service/interface/IFeedbackService";
import { NodeEmailerService } from "./service/NodeEmailerService";

export const router = express.Router();

const basePath = "/feedback";

const feedbackService: FeedbackService = new FeedbackService(
  new FeedbackRepository(),
  new NodeEmailerService()
);

router.post(basePath, async (req, res) => {
  res.send(await feedbackService.submit(req.body));
});
