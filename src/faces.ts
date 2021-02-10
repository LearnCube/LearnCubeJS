export interface Log {
  uuid: string
  token: string
  slug: string
  userid: any //todo what type?
  creation_date: string,
  type: string // todo fixed types?
  status: string // todo fixed types?
  info:  string // todo fixed types?
  response: any //todo what type?
}

export interface LogList {
  count: number
  next: boolean | null
  previous: boolean | null
  results: Log[]
}