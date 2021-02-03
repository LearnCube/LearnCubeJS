import {Learncube} from "../index";

class Classroom extends Learncube {
  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(private_key, private_key, api_base_path);
  }

  create(room_token: string, params: object) {
    return this.post('classrooms/', {room_token, ...params})
  }

  read(uuid: string) {
    return this.get(`classrooms/${uuid}/`)
  }

  list(params: object) {
    return this.get('classrooms/', params)
  }

  update(uuid: string, params: object) {
    return this.put(`classrooms/${uuid}/`, params)
  }

  delete(uuid: string): any {
    return super.delete(`classrooms/${uuid}/`);
  }
}