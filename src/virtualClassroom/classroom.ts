import {APIHandler} from "../apiHandler";

export class Classroom extends APIHandler {
  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(public_key, private_key, api_base_path);
  }

  async create(room_token: string, params: object) {
    return await this.post('classrooms/', {room_token, ...params})
  }

  async read(uuid: string) {
    return await this.get(`classrooms/${uuid}/`)
  }

  async list(params: object) {
    return await this.get('classrooms/', params)
  }

  async update(uuid: string, params: object) {
    return await this.put(`classrooms/${uuid}/`, params)
  }

  async delete(uuid: string) {
    return await super.delete(`classrooms/${uuid}/`);
  }
}