import { HttpClient } from "../types/common";

export class Ebills {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/ebills", payload); }
  update(id: string, payload: any) { return this.client.put(`/ebills/${id}`, payload); }
  get(id: string) { return this.client.get(`/ebills/${id}`); }
}
