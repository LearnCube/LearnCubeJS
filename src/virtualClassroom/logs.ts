import {APIHandler} from "../apiHandler";
import {PaginatedList} from "../faces";

type LogType =
  'room_init'
  | 'room_created'
  | 'classroom_start'
  | 'participant_added'
  | 'participant_entered'
  | 'participant_left'
  | 'classroom_end'
  | 'room_endpoint'
type StatusType = 'ok' | 'error'

interface LogInput {
  page?: number
  room_token?: string
  userid?: string
  log_date_before?: string
  log_date_after?: string
  type?: LogType
  status?: StatusType
}

export interface Log {
  uuid: string
  token: string
  slug: string
  userid: string
  creation_date: string
  type: LogType
  status: StatusType
  info: string // todo fixed types?
  response: any //todo what type?
}

export interface LogList extends PaginatedList {
  results: Log[]
}


export class Logs extends APIHandler {

  constructor(public_key: string, private_key: string, api_base_path?: string) {
    super(public_key, private_key, api_base_path);
  }

  async read(uuid: string): Promise<Log> {
    return await this.get(`logs/${uuid}/`)
  }

  async list(params: LogInput = {}): Promise<LogList> {
    return await this.get('logs/', params)
  }
}