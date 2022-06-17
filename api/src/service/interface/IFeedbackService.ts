import { Feedback } from "@prisma/client";

export interface IFeedbackService {
  submit(request: RequestSubmitFeedback): Promise<Feedback>;
}

export type RequestSubmitFeedback = {
  type: string;
  comment: string;
  screenshot: string;
};
