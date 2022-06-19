import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "../data/interface/IFeedbackRepository";
import { IEmailService } from "./interface/IEmailService";
import {
  IFeedbackService,
  RequestSubmitFeedback,
} from "./interface/IFeedbackService";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { injectionTypes } from "../injectionTypes";

@injectable()
export class FeedbackService implements IFeedbackService {
  private _repository: IFeedbackRepository;
  private _emailService: IEmailService;

  public constructor(
    @inject(injectionTypes.EmailService) emailService: IEmailService,
    @inject(injectionTypes.FeedbackRepository) repository: IFeedbackRepository
  ) {
    this._emailService = emailService;
    this._repository = repository;
  }

  async submit({
    type,
    comment,
    screenshot,
  }: RequestSubmitFeedback): Promise<Feedback> {
    if (!type) throw new Error("Type is required");
    if (!comment) throw new Error("Comment is required");

    let feedback = await this._repository.create(type, comment, screenshot);

    await this._emailService.send({
      content: comment,
      email: "pedrorafag00@gmail.com",
    });

    return feedback;
  }
}
