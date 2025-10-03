import { HttpClient } from "../types/common";

export class VirtualAccounts {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/virtual-account-numbers", payload); }
  fetch(id: string) { return this.client.get(`/virtual-account-numbers/${id}`); }
  list() { return this.client.get("/virtual-account-numbers"); }
  transactions(id: string) { return this.client.get(`/virtual-account-numbers/${id}/transactions`); }
  updateBvn(id: string, payload: any) { return this.client.put(`/virtual-account-numbers/${id}/bvn`, payload); }
}
