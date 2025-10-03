import { HttpClient } from "../types/common";

export class CardIssuing {
  constructor(private client: HttpClient) {}

  createCard(payload: any) { return this.client.post("/virtual-cards", payload); }
  getCard(id: string) { return this.client.get(`/virtual-cards/${id}`); }
  listCards() { return this.client.get("/virtual-cards"); }
  fundCard(id: string, payload: any) { return this.client.post(`/virtual-cards/${id}/fund`, payload); }
  withdrawCard(id: string, payload: any) { return this.client.post(`/virtual-cards/${id}/withdraw`, payload); }
  blockCard(id: string) { return this.client.post(`/virtual-cards/${id}/status/block`); }
  unblockCard(id: string) { return this.client.post(`/virtual-cards/${id}/status/unblock`); }
  terminateCard(id: string) { return this.client.delete(`/virtual-cards/${id}`); }
}
