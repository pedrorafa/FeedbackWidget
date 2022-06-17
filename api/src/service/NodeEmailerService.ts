import { IEmailService, RequestSendEmail } from "./interface/IEmailService";

export class NodeEmailerService implements IEmailService{
    async send(request: RequestSendEmail): Promise<boolean> {
        console.log(request)
        return true
    }
}