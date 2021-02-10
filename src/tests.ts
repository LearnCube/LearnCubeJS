import {APIHandler, Participants, Classroom, Logs, Learncube} from ".";
import {public_key, private_key} from "./credentials";
import {assert} from "chai";

const api_base_path = ""

describe("Core", function () {
  it("Initiate a APIHandler instance", (done) => {
    const client = new APIHandler(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a Participants instance", (done) => {
    const client = new Participants(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a Logs instance", (done) => {
    const client = new Logs(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a Classroom instance", (done) => {
    const client = new Classroom(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a Learncube instance", (done) => {
    const client = new Learncube(public_key, private_key)
    done()
  });
});

describe("Virtual Classroom", () => {
  describe("Participants", () => {
    const lc = new Learncube(public_key, private_key)
    it("Should read a participant", (done) => {
      const uuid = ""
      lc.participants.read(uuid).then((res) => {
        console.log(res)
        done()
      })
    });
    it("Should list participants", (done) => {
      lc.participants.list({})
    });
  })
  describe("Logs", () => {
    const lc = new Learncube(public_key, private_key)
    it("Should read a log", (done) => {
      const uuid = ""
      lc.logs.read(uuid)
    });
    it("Should list logs", (done) => {
      lc.logs.list({})
    });
  })
  describe("Classroom", () => {
    const lc = new Learncube(public_key, private_key)
    it("Should create a classroom", (done) => {
      const room_token = "";
      lc.classroom.create(room_token, {})
    });
    it("Should read a classroom", (done) => {
      const uuid = "";
      lc.classroom.read(uuid)
    });
    it("Should list classrooms", (done) => {
      lc.classroom.list({})
    });
    it("Should update a classroom", (done) => {
      const uuid = "";
      lc.classroom.update(uuid, {})
    });
    it("Should delete a classroom", (done) => {
      const uuid = "";
      lc. classroom.delete(uuid)
    });
  })
});
