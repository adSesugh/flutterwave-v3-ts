import { HttpClient } from "../types/common";

export class Tokenization {
  constructor(private client: HttpClient) {}

  chargeToken(payload: any) { return this.client.post("/tokenized-charges", payload); }
  bulkCharge(payload: any) { return this.client.post("/bulk-tokenized-charges", payload); }
  bulkChargeRetrieve(batchId: string) { return this.client.get(`/bulk-tokenized-charges/${batchId}`); }
}
