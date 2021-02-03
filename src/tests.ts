import {Learncube, Participants, Classroom, Logs} from ".";
import {assert} from "chai";

describe("Core", function () {
  it("Initiate a Learncube instance", (done) => {
    const client = new Learncube()
  });
  it("Initiate a Participants instance", (done) => {
    const client = new Participants()
  });
  it("Initiate a Logs instance", (done) => {
    const client = new Logs()
  });
  it("Initiate a Classroom instance", (done) => {
    const client = new Classroom()
  });
});

describe("Virtual Classroom", () => {
  describe("Participants", () => {
    const participantsAPI = new Participants()
    it("Should read a participant", (done) => {
      participantsAPI.read()
    });
    it("Should list participants", (done) => {
      participantsAPI.list()
    });
  })
  describe("Logs", () => {
    const logsAPI = new Logs()
    it("Should read a log", (done) => {
      logsAPI.read()
    });
    it("Should list logs", (done) => {
      logsAPI.list()
    });
  })
  describe("Classroom", () => {
    const classroomAPI = new Classroom()
    it("Should create a classroom", (done) => {
      classroomAPI.create()
    });
    it("Should read a classroom", (done) => {
      classroomAPI.read()
    });
    it("Should list classrooms", (done) => {
      classroomAPI.list()
    });
    it("Should update a classroom", (done) => {
      classroomAPI.update()
    });
    it("Should delete a classroom", (done) => {
      classroomAPI.delete()
    });
  })
});
