import fetch from "node-fetch";
import {Participants, Logs, Classroom} from "./virtualClassroom";


export class Learncube {

  private lastValidToken: string | undefined;
  private PUBLIC_KEY: string;
  private PRIVATE_KEY: string;
  private apiBasePath: string = 'https://app.learncube.com/api/virtual-classroom/';

  constructor(public_key: string, private_key: string, api_base_path: string | undefined) {
    this.PUBLIC_KEY = public_key
    this.PRIVATE_KEY = private_key
    if (api_base_path) this.apiBasePath = api_base_path
  }

  private async getValidToken() {
    const verifyTokenEndpoint = this.apiBasePath + "verify-api-token/"

    let data: object = {"token": this.lastValidToken}
    let response = await fetch(verifyTokenEndpoint, {method: "post", body: JSON.stringify(data)})

    if (response.status !== 200) {
      // create token
      data = {"api_public_key": this.PUBLIC_KEY, "api_private_key": this.PRIVATE_KEY}
      response = await fetch(verifyTokenEndpoint, {method: "post", body: JSON.stringify(data)})
      this.lastValidToken = (await response.json()).token
    }

  }

  async get(endpoint: string, params: object = {}) {
    const headers = {'Authorization': 'Bearer ' + (await this.getValidToken())}
    const response = await fetch(this.apiBasePath + endpoint, {headers: headers});
    return await response.json();
  }

  async post(endpoint: string, json: object = {}) {
    const headers = {'Authorization': 'Bearer ' + (await this.getValidToken()), 'Content-Type': 'application/json'}
    const response = await fetch(this.apiBasePath + endpoint, {
      method: 'post',
      body: JSON.stringify(json),
      headers: headers
    });
    return await response.json();
  }

  async put(endpoint: string, json: object = {}) {
    const headers = {'Authorization': 'Bearer ' + (await this.getValidToken()), 'Content-Type': 'application/json'}
    const response = await fetch(this.apiBasePath + endpoint, {
      method: 'post',
      body: JSON.stringify(json),
      headers: headers
    });
    return await response.json();
  }

  async delete(endpoint: string) {
    const headers = {'Authorization': 'Bearer ' + (await this.getValidToken())}
    const response = await fetch(this.apiBasePath + endpoint, {
      method: 'delete',
      headers: headers
    });
    return await response.json();
  }
}

export {
  Logs,
  Participants,
  Classroom
}