import { HttpClient } from "../types/common";

export class Banks {
  constructor(private client: HttpClient) {}

  list(params?: any) { return this.client.get("/banks", { params }); }
  fetchBranches(id: string) { return this.client.get(`/banks/${id}/branches`); }
}
