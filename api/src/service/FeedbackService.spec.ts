import { Feedback } from "@prisma/client";
import { FeedbackService } from "./FeedbackService";

const feedbackServiceMock = new FeedbackService(
  {
    create: (): Promise<Feedback> => {
      return {} as Promise<Feedback>;
    },
  },
  {
    send: () => {
      return {} as Promise<boolean>;
    },
  }
);

describe("Submit feedback", () => {
  it("Should be able to submit feedback", () => {
    expect(
      feedbackServiceMock.submit({ type: "BUG", comment: "Submit", screenshot: "img" })
    ).resolves.not.toThrow();
  });
  it("Should be throw error type required", () => {
    expect(
      feedbackServiceMock.submit({ type: "", comment: "Submit", screenshot: "img" })
    ).rejects.toThrow();
  });
  it("Should be throw error comment required", () => {
    expect(
      feedbackServiceMock.submit({ type: "BUG", comment: "", screenshot: "img" })
    ).rejects.toThrow();
  });
});
