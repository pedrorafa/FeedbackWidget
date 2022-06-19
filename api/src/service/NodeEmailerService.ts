import { IEmailService, RequestSendEmail } from "./interface/IEmailService";
import { injectable } from "inversify";

@injectable()
export class NodeEmailerService implements IEmailService {
  async send(request: RequestSendEmail): Promise<boolean> {
    console.log(request);
    return true;
  }
}
