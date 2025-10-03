import { HttpClient } from "../types/common";

export class Beneficiaries {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/beneficiaries", payload); }
  fetch(id: string) { return this.client.get(`/beneficiaries/${id}`); }
  delete(id: string) { return this.client.delete(`/beneficiaries/${id}`); }
}
