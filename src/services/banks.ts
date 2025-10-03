import { HttpClient } from "../types/common";

export class Banks {
  constructor(private client: HttpClient) {}

  list(country?: any) { return this.client.get(`/banks/${country}`); }
  fetchBranches(id: string) { return this.client.get(`/banks/${id}/branches`); }
}
