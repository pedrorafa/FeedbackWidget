export interface IEmailService {
  send(request: RequestSendEmail): Promise<boolean>;
}

export type RequestSendEmail = {
  email: string,
  content: string
};