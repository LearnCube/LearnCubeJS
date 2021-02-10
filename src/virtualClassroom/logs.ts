import {APIHandler} from "../apiHandler";
import {LogList, Log} from "../faces";

export class Logs extends APIHandler {

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(public_key, private_key, api_base_path);
  }

  async read(uuid: string): Promise<Log> {
    return await this.get(`logs/${uuid}/`)
  }

  async list(params: object): Promise<LogList> {
    return await this.get('logs/', params)
  }
}