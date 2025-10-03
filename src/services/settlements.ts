import { HttpClient } from "../types/common";

export class Settlements {
  constructor(private client: HttpClient) {}

  list(params?: any) { return this.client.get("/settlements", { params }); }
  fetch(id: string) { return this.client.get(`/settlements/${id}`); }
}
