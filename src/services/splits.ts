import { HttpClient } from "../types/common";

export class Splits {
  constructor(private client: HttpClient) {}

  createSubaccount(payload: any) { return this.client.post("/subaccounts", payload); }
  getSubaccount(id: string) { return this.client.get(`/subaccounts/${id}`); }
  listSubaccounts() { return this.client.get("/subaccounts"); }
  updateSubaccount(id: string, payload: any) { return this.client.put(`/subaccounts/${id}`, payload); }
  deleteSubaccount(id: string) { return this.client.delete(`/subaccounts/${id}`); }
}
