import { HttpClient } from "../types/common";

export class Collections {
  constructor(private client: HttpClient) {}

  chargeCard(payload: any) { return this.client.post("/charges?type=card", payload); }
  chargeAccount(payload: any) { return this.client.post("/charges?type=account", payload); }
  chargeMpesa(payload: any) { return this.client.post("/charges?type=mpesa", payload); }
  chargeUssd(payload: any) { return this.client.post("/charges?type=ussd", payload); }
  chargeVoucher(payload: any) { return this.client.post("/charges?type=voucher", payload); }
  chargeBankTransfer(payload: any) { return this.client.post("/charges?type=bank_transfer", payload); }
  verifyTransaction(id: number) { return this.client.get(`/transactions/${id}/verify`); }
  refund(id: number, payload: any) { return this.client.post(`/transactions/${id}/refund`, payload); }
}
