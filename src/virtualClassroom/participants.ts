import {Learncube} from "../index";

export class Participants extends Learncube {

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(private_key, private_key, api_base_path);
  }

  async read(uuid: string) {
    return await this.get(`participants/${uuid}/`)
  }

  async list(params: object) {
    return await this.get('participants/', params)
  }
}