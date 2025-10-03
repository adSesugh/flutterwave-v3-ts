import axios, { AxiosInstance } from "axios";
import { HttpClient } from "./types/common";

// Services
import { Collections } from "./services/collections";
import { Tokenization } from "./services/tokenization";
import { Splits } from "./services/splits";
import { Schedules } from "./services/schedules";
import { Transfers } from "./services/transfers";
import { CardIssuing } from "./services/cardIssuing";
import { VirtualAccounts } from "./services/virtualAccounts";
import { Bills } from "./services/bills";
import { Transactions } from "./services/transactions";
import { Beneficiaries } from "./services/beneficiaries";
import { Banks } from "./services/banks";
import { Settlements } from "./services/settlements";
import { OTP } from "./services/otp";
import { Ebills } from "./services/ebills";
import { Misc } from "./services/misc";

export interface FlutterwaveConfig {
  publicKey: string;
  secretKey: string;
  encryptionKey?: string;
  baseUrl?: string;
}

class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor(config: FlutterwaveConfig) {
    this.client = axios.create({
      baseURL: config.baseUrl || "https://api.flutterwave.com/v3",
      headers: {
        Authorization: `Bearer ${config.secretKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  get<T = any>(url: string, options?: any): Promise<T> {
    return this.client.get(url, options).then((res) => res.data);
  }

  post<T = any>(url: string, data?: any, options?: any): Promise<T> {
    return this.client.post(url, data, options).then((res) => res.data);
  }

  put<T = any>(url: string, data?: any, options?: any): Promise<T> {
    return this.client.put(url, data, options).then((res) => res.data);
  }

  delete<T = any>(url: string, options?: any): Promise<T> {
    return this.client.delete(url, options).then((res) => res.data);
  }
}

export class Flutterwave {
  public collections: Collections;
  public tokenization: Tokenization;
  public splits: Splits;
  public schedules: Schedules;
  public transfers: Transfers;
  public cardIssuing: CardIssuing;
  public virtualAccounts: VirtualAccounts;
  public bills: Bills;
  public transactions: Transactions;
  public beneficiaries: Beneficiaries;
  public banks: Banks;
  public settlements: Settlements;
  public otp: OTP;
  public ebills: Ebills;
  public misc: Misc;

  constructor(config: FlutterwaveConfig) {
    const httpClient = new AxiosHttpClient(config);

    this.collections = new Collections(httpClient);
    this.tokenization = new Tokenization(httpClient);
    this.splits = new Splits(httpClient);
    this.schedules = new Schedules(httpClient);
    this.transfers = new Transfers(httpClient);
    this.cardIssuing = new CardIssuing(httpClient);
    this.virtualAccounts = new VirtualAccounts(httpClient);
    this.bills = new Bills(httpClient);
    this.transactions = new Transactions(httpClient);
    this.beneficiaries = new Beneficiaries(httpClient);
    this.banks = new Banks(httpClient);
    this.settlements = new Settlements(httpClient);
    this.otp = new OTP(httpClient);
    this.ebills = new Ebills(httpClient);
    this.misc = new Misc(httpClient);
  }
}
