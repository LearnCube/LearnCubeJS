import {Learncube} from "../index";

export class Participants extends Learncube {

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(private_key, private_key, api_base_path);
  }

  read(uuid: string) {
    return this.get(`participants/${uuid}/`)
  }

  list(params: object) {
    return this.get('participants/', params)
  }
}