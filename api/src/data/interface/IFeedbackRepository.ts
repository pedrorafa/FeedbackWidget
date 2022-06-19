import { Feedback } from "@prisma/client";

export interface IFeedbackRepository {
  create(type: string, comment: string, screenshot: string): Promise<Feedback>;
}
