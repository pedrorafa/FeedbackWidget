import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "../interface/IFeedbackRepository";
import { prisma } from "../prisma";
import { injectable } from "inversify";

@injectable()
export class FeedbackRepository implements IFeedbackRepository {
  async create(
    type: string,
    comment: string,
    screenshot: string
  ): Promise<Feedback> {
    return await prisma.feedback.create({
      data: {
        type: type,
        comment,
        screenshot,
      },
    });
  }
}
