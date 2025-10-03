import { HttpClient } from "../types/common";

export class Bills {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/bills", payload); }
  fetch(id: string) { return this.client.get(`/bills/${id}`); }
  bulk(payload: any) { return this.client.post("/bills/bulk", payload); }
  verify(id: string) { return this.client.get(`/bills/${id}/verify`); }
}
