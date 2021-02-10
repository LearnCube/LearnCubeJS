import {APIHandler} from "../apiHandler";

type Status = "pass" | "fail"

interface TroubleshooterInput {
  page?: number
  userid?: string
  log_date_before?: string
  log_date_after?: string
  status?: Status
}


export class Troubleshooter extends APIHandler {

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(public_key, private_key, api_base_path);
  }

  async read(uuid: string) {
    return await this.get(`troubleshooter/${uuid}/`)
  }

  async list(params: TroubleshooterInput = {}) {
    return await this.get('troubleshooter/', params)
  }
}