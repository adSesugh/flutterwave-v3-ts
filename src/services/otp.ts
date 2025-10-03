import { HttpClient } from "../types/common";

export class OTP {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/otps", payload); }
  validate(payload: any) { return this.client.post("/otps/validate", payload); }
}
