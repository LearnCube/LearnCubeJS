import {APIHandler, Participants, Classroom, Logs, Learncube, Troubleshooter} from ".";
import {public_key, private_key} from "./credentials";
import {assert} from "chai";

const api_base_path = ""

describe("Core", function () {
  it("Initiate an APIHandler instance", (done) => {
    const client = new APIHandler(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a participants instance", (done) => {
    const client = new Participants(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a logs instance", (done) => {
    const client = new Logs(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a classroom instance", (done) => {
    const client = new Classroom(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a troubleshooter instance", (done) => {
    const client = new Troubleshooter(public_key, private_key, api_base_path)
    done()
  });
  it("Initiate a learncube instance", (done) => {
    const client = new Learncube(public_key, private_key)
    done()
  });
});

describe("Virtual Classroom", () => {
  const lc = new Learncube(public_key, private_key)

  describe("Participants", () => {
    it("Should read a participant", (done) => {
      const uuid = ""
      lc.participants.read(uuid).then((res) => {
        // console.log(res)
        done()
      })
    });
    it("Should list participants", (done) => {
      lc.participants.list().then(participants => {
        // console.log(participants)
        done()
      })
    });
  })
  describe("Logs", () => {
    let uuid = "";
    it("Should list logs", (done) => {
      lc.logs.list().then((logs) => {
        assert(logs.results)
        assert(logs.results.length > 0)
        //set a uuid for the next test
        uuid = logs.results[0].uuid
        done()
      })
    });
    it("Should read a log", (done) => {
      lc.logs.read(uuid).then((log) => {
        assert(log.uuid === uuid)
        done()
      })
    });
  })
  describe("Classroom", () => {
    let uuid = "";
    const room_token = "testing_token";
    it("Should create a classroom", (done) => {
      lc.classroom.create({room_token: room_token}).then((room) => {
        assert(room.uuid)
        uuid = room.uuid
        done()
      })
    });
    it("Should read a classroom", (done) => {
      lc.classroom.read(uuid).then((room) => {
        assert(room.uuid === uuid)
        assert(room.room_token === room_token)
        done()
      })
    });
    it("Should list classrooms", (done) => {
      lc.classroom.list().then((rooms) => {
        assert(rooms.results.length > 0)
        done()
      })
    });
    it("Should update a classroom", (done) => {
      lc.classroom.update(uuid, {room_token: room_token}).then((room) => {
        assert(room.uuid === uuid)
        assert(room.room_token === room_token)
        done()
      })
    });
    it("Should delete a classroom", (done) => {
      lc.classroom.delete(uuid).then((deleted) => {
        assert(deleted)
        done()
      })
    });
  })
  describe("Troubleshooter", () => {
    it("Should get a troubleshooter event", (done) => {
      const uuid = ""
      lc.troubleshooter.read(uuid).then((res) => {
        //console.log(res)
        done()
      })
    });
    it("Should list  troubleshooter events", (done) => {
      lc.troubleshooter.list().then((events) => {
        //console.log(events)
        done()
      })
    });
  })
});
