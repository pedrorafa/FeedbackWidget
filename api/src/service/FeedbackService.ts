import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "../data/interface/IFeedbackRepository";
import { IEmailService } from "./interface/IEmailService";
import {
  IFeedbackService,
  RequestSubmitFeedback,
} from "./interface/IFeedbackService";

export class FeedbackService implements IFeedbackService {
  private _repository: IFeedbackRepository;
  private _emailService: IEmailService;
  constructor(repository: IFeedbackRepository, emailService: IEmailService) {
    this._repository = repository;
    this._emailService = emailService;
  }

  async submit({
    type,
    comment,
    screenshot,
  }: RequestSubmitFeedback): Promise<Feedback> {
    if (!type) throw new Error("Type is required");
    if (!comment) throw new Error("Comment is required");

    let feedback = await this._repository.create(type, comment, screenshot);

    await this._emailService.send({});

    return feedback;
  }
}
