import fetch from "node-fetch";

import {URLSearchParams} from 'url';

export class APIHandler {

  private lastValidToken: string | undefined = "";
  private lastValidTokenDate: any = undefined
  private PUBLIC_KEY: string;
  private PRIVATE_KEY: string;
  private apiBasePath: string;

  constructor(public_key: string, private_key: string, api_base_path: string = 'https://app.learncube.com/api/virtual-classroom/') {
    this.PUBLIC_KEY = public_key
    this.PRIVATE_KEY = private_key
    this.apiBasePath = api_base_path
  }

  private async getNewAccessToken() {
    // create token
    const data = {"api_public_key": this.PUBLIC_KEY, "api_private_key": this.PRIVATE_KEY}
    const response = await fetch(this.apiBasePath + "get-api-token/", {
      method: "post",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })

    this.lastValidTokenDate = new Date()
    return (await response.json()).token
  }

  private async accessTokenValid(): Promise<Boolean> {
    const data = {"token": this.lastValidToken}
    const response = await fetch(this.apiBasePath + "verify-api-token/", {
      method: "post",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })

    return response.status === 200
  }

  private async getValidToken() {

    // if no token is set, get new token
    if (!this.lastValidToken) {
      // set token
      this.lastValidToken = await this.getNewAccessToken()
    } else {
      // todo show options, a) by time b) by endpoint
      // in case a token is set, check for the time difference in minutes
      const diff = (new Date().getTime() - this.lastValidTokenDate.getTime()) / 1000.0 / 60.0
      // if the difference is greater than 4.5 minutes, create a new access token
      if (diff > 4.5) {
        this.lastValidToken = await this.getNewAccessToken()
      }
    }

    return this.lastValidToken
  }

  async get(endpoint: string, params: any = {}) {
    const headers = {'Authorization': 'Bearer ' + (await this.getValidToken())}
    const response = await fetch(this.apiBasePath + endpoint + '?' + new URLSearchParams(params), {headers: headers});
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
      method: 'put',
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
    return response.status === 204;
  }
}