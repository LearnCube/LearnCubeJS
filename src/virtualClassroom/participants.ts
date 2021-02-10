import {APIHandler} from "../apiHandler";

type UserRole = "teacher" | "student"

interface ParticipantInput {
  page?: number
  room_token?: string
  room_slug?: string
  company_slug?: string
  userid?: string
  username?: string
  attended?: boolean
  attended_time_before?: string
  attended_time_after?: string
  ended_time_before?: string
  ended_time_after?: string
  class_rating_lte?: number
  class_rating_gte?: number
  user_role?: UserRole
  teacher?: string
}


export class Participants extends APIHandler {

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    super(public_key, private_key, api_base_path);
  }

  async read(uuid: string) {
    return await this.get(`participants/${uuid}/`)
  }

  async list(params: ParticipantInput = {}) {
    return await this.get('participants/', params)
  }
}