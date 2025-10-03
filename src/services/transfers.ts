import { HttpClient } from "../types/common";

export class Transfers {
  constructor(private client: HttpClient) {}

  initiate(payload: any) { return this.client.post("/transfers", payload); }
  bulk(payload: any) { return this.client.post("/bulk-transfers", payload); }
  retry(id: string) { return this.client.post(`/transfers/${id}/retry`); }
  fetch(id: string) { return this.client.get(`/transfers/${id}`); }
  list() { return this.client.get("/transfers"); }
  fees(payload: any) { return this.client.get("/transfers/fee", { params: payload }); }
}
