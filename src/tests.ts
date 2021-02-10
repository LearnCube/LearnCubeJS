import {APIHandler, Participants, Classroom, Logs, Learncube} from ".";
import {assert} from "chai";

describe("Core", function () {
  it("Initiate a APIHandler instance", (done) => {
    const client = new APIHandler()
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
  it("Initiate a Learncube instance", (done) => {
    const client = new Learncube()
  });
});

describe("Virtual Classroom", () => {
  describe("Participants", () => {
    const lc = new Learncube()
    it("Should read a participant", (done) => {
      lc.participants.read()
    });
    it("Should list participants", (done) => {
      lc.participants.list()
    });
  })
  describe("Logs", () => {
    const lc = new Learncube()
    it("Should read a log", (done) => {
      lc.logs.read()
    });
    it("Should list logs", (done) => {
      lc.logs.list()
    });
  })
  describe("Classroom", () => {
    const lc = new Learncube()
    it("Should create a classroom", (done) => {
      lc.classroom.create()
    });
    it("Should read a classroom", (done) => {
      lc.classroom.read()
    });
    it("Should list classrooms", (done) => {
      lc.classroom.list()
    });
    it("Should update a classroom", (done) => {
      lc.classroom.update()
    });
    it("Should delete a classroom", (done) => {
     lc. classroom.delete()
    });
  })
});
