import { HttpClient } from "../types/common";

export class Misc {
  constructor(private client: HttpClient) {}

  getBalance() { return this.client.get("/balance"); }
  getExchangeRate(params: any) { return this.client.get("/forex", { params }); }
  getFee(params: any) { return this.client.get("/fee", { params }); }
}
