import "reflect-metadata";
import { Container } from "inversify";
import { IFeedbackRepository } from "./data/interface/IFeedbackRepository";
import { FeedbackRepository } from "./data/repository/FeedbackRepository";
import { FeedbackService } from "./service/FeedbackService";
import { IEmailService } from "./service/interface/IEmailService";
import { IFeedbackService } from "./service/interface/IFeedbackService";
import { NodeEmailerService } from "./service/NodeEmailerService";
import { injectionTypes } from "./injectionTypes";

// set up container
const container = new Container({ autoBindInjectable: true });

container
  .bind<IFeedbackRepository>(injectionTypes.FeedbackRepository)
  .to(FeedbackRepository)
  .inRequestScope();

container
  .bind<IEmailService>(injectionTypes.EmailService)
  .to(NodeEmailerService)
  .inRequestScope();

container
  .bind<IFeedbackService>(injectionTypes.FeedbackService)
  .to(FeedbackService)
  .inRequestScope();

export default container;
