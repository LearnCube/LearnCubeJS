import {APIHandler} from "../apiHandler";
import {ClassroomList, ClassroomInterface} from "../faces";

interface ClassroomListInput {
  page?: number
  room_token?: string
  start_before?: string
  start_after?: string
  company_slug?: string
  teacher_attended?: boolean
  teacher_id?: string // todo maybe number?
}

interface ClassroomInput {
  room_token: string
  cancelled?: boolean
  description?: string
  start?: string
  end?: string
  max_participants?: number
  audio_only?: boolean
  whiteboard_only?: boolean
  return_url?: string
  record_class?: boolean
}

export class Classroom extends APIHandler {
  constructor(public_key: string, private_key: string, api_base_path?: string) {
    super(public_key, private_key, api_base_path);
  }

  async create(params: ClassroomInput): Promise<ClassroomInterface> {
    return await this.post('classrooms/', params)
  }

  async read(uuid: string): Promise<ClassroomInterface> {
    return await this.get(`classrooms/${uuid}/`)
  }

  async list(params: ClassroomListInput = {}): Promise<ClassroomList> {
    return await this.get('classrooms/', params)
  }

  async update(uuid: string, params: ClassroomInput): Promise<ClassroomInterface> {
    return await this.put(`classrooms/${uuid}/`, params)
  }

  async delete(uuid: string): Promise<boolean> {
    return await super.delete(`classrooms/${uuid}/`);
  }
}