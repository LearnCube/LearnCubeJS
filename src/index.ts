import {Classroom, Logs, Participants} from "./virtualClassroom";
import {APIHandler} from "./apiHandler";


export class Learncube {

  logs: Logs;
  classroom: Classroom;
  participants: Participants;

  constructor(public_key: string, private_key: string, api_base_path: string = "https://app.learncube.com/api/virtual-classroom/") {
    this.logs = new Logs(public_key, private_key, api_base_path)
    this.participants = new Participants(public_key, private_key, api_base_path)
    this.classroom = new Classroom(public_key, private_key, api_base_path)
  }
}

export {
  APIHandler,
  Logs,
  Participants,
  Classroom
}