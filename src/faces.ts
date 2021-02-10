export interface PaginatedList {
  count: number
  next: boolean | null
  previous: boolean | null
  results: any[]
}

export interface Log {
  uuid: string
  token: string
  slug: string
  userid: any //todo what type?
  creation_date: string,
  type: string // todo fixed types?
  status: string // todo fixed types?
  info: string // todo fixed types?
  response: any //todo what type?
}

export interface Participant {

}

export interface ClassroomInterface {
  uuid: string
  teacher_id: string
  creation_date: string
  room_token: any //todo what type?
  cancelled: boolean
  cancelled_by: any //todo what type?
  description: string
  start: string
  end: string
  max_participants: number
  audio_only: boolean
  whiteboard_only: boolean
  teacher_attended: boolean
  teacher_attended_time: string
  actual_class_start: string
  actual_class_end: string
  actual_duration: number
  return_url: string | undefined //todo what type?
  room_url: string
  room_review_url: string
  recorded_class_url: string
  slug: string
}

export interface LogList extends PaginatedList {
  results: Log[]
}

export interface ParticipantList extends PaginatedList {
  results: Participant[]
}

export interface ClassroomList extends PaginatedList {
  results: ClassroomInterface[]
}