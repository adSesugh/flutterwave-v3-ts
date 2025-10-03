import { HttpClient } from "../types/common";

export class Schedules {
  constructor(private client: HttpClient) {}

  create(payload: any) { return this.client.post("/payment-plans", payload); }
  get(id: string) { return this.client.get(`/payment-plans/${id}`); }
  cancel(id: string) { return this.client.put(`/payment-plans/${id}/cancel`); }
}
