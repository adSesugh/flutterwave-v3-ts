import { HttpClient } from "../types/common";

export class Transactions {
  constructor(private client: HttpClient) {}

  verify(id: number) { return this.client.get(`/transactions/${id}/verify`); }
  resendWebhook(id: number) { return this.client.post(`/transactions/${id}/resend-hook`); }
  timeline(id: number) { return this.client.get(`/transactions/${id}/timeline`); }
  requery(id: number) { return this.client.get(`/transactions/${id}/requery`); }
  refund(id: number, payload: any) { return this.client.post(`/transactions/${id}/refund`, payload); }
  fetch(id: number) { return this.client.get(`/transactions/${id}`); }
  list(params?: Record<string, any>) { return this.client.get(`/transactions`, { params }); }
}
