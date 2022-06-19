import express from "express";
import container from "./injection";
import { injectionTypes } from "./injectionTypes";
import { IFeedbackService } from "./service/interface/IFeedbackService";

export const router = express.Router();

const basePath = "/feedback";

const feedbackService = container.get<IFeedbackService>(injectionTypes.FeedbackService);

router.post(basePath, async (req, res) => {
  res.send(await feedbackService.submit(req.body));
});
