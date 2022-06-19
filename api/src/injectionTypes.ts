import "reflect-metadata";

export const injectionTypes = {
  FeedbackRepository: Symbol.for("IFeedbackRepository"),
  EmailService: Symbol.for("IEmailService"),
  FeedbackService: Symbol.for("IFeedbackService"),
};