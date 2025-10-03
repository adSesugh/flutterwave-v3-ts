# Flutterwave Node v3 (TypeScript SDK)

[![npm version](https://img.shields.io/npm/v/flutterwave-v3-ts.svg)](https://www.npmjs.com/package/flutterwave-v3-ts)
[![npm downloads](https://img.shields.io/npm/dm/flutterwave-v3-ts.svg)](https://www.npmjs.com/package/flutterwave-v3-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/adsesugh/flutterwave-v3-ts/ci.yml?branch=main)](https://github.com/adsesugh/flutterwave-v3-ts/actions)

A fully typed **TypeScript SDK** for the [Flutterwave v3 API](https://developer.flutterwave.com/).  
This library simplifies integrating payments, transfers, card issuing, and more with Flutterwave in your Node.js/TypeScript applications.

---

## 📦 Installation

```bash
npm install flutterwave-v3-ts
```
or 
```bash
yarn add flutterwave-v3-ts
```

## 🚀 Usage

```typescript
import { Flutterwave } from "flutterwave-v3-ts";

const flw = new Flutterwave({
  publicKey: process.env.FLW_PUBLIC_KEY!,
  secretKey: process.env.FLW_SECRET_KEY!
});

// Example: Verify a transaction
(async () => {
  const response = await flw.transactions.verify({ id: "1234567890" });
  console.log(response);
})();
```

## 🔑 Configuration
Set your Flutterwave API keys in environment variables:

```env 
FLW_PUBLIC_KEY=your_public_key
FLW_SECRET_KEY=your_secret_key
BASE_URL=api_base_url
FLW_ENCRYPTION_KEY=your_encryption_key
```

Pass your public and secret keys when initializing:
```typescript
const flw = new Flutterwave({
  publicKey: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx",
  secretKey: "FLWSECK_TEST-xxxxxxxxxxxxxxxxxxxxx",
  baseUrl: "https://api.flutterwave.com/v3", // Optional, defaults to Flutterwave's API URL
  encryptionKey: "your encryption_key"
});

```

## 📚 Features
- Collections (Card, Bank, Mobile Money, USSD, etc.)
- Tokenization
- Split payments
- Scheduled payments
- Transfers
- Card Issuing
- Virtual Accounts
- Bill Payments
- Transactions & Reporting
- Beneficiaries
- Banks
- Settlements
- OTP
- eBills
- Miscellaneous Endpoints

## 🔍 Usage Examples
See the [examples](./examples) directory for more usage examples.
### Collections
```typescript
const response = await flw.collections.cardCharge({
  card_number: "5531886652142950",
  cvv: "564",
  expiry_month: "09",
  expiry_year: "32",
  currency: "NGN",
  amount: "100",
  fullname: "Flutterwave Developer",
  email: "developers@flutterwavego.com",
  tx_ref: "MC-3243e"
});
console.log(response);
```

### Tokenization
```typescript
const response = await flw.tokenization.chargeToken({
  token: "CARD_TOKEN",
  currency: "NGN",
  country: "NG",
  amount: 5000,
  email: "user@example.com",
  tx_ref: "ref-1234"
});
console.log(response);
```

### Transfers
```typescript
const response = await flw.transfers.initiate({
  account_bank: "044",
  account_number: "0690000031",
  amount: 5500,
  narration: "Test transfer",
  currency: "NGN",
  reference: "transfer-12345",
  debit_currency: "NGN"
});
console.log(response);
```

### Card Issuing
```typescript
const response = await flw.cardIssuing.createCard({
  currency: "NGN",
  amount: 1000,
  billing_name: "John Doe",
  billing_address: "123, Test Street",
  billing_city: "Lagos",
  billing_state: "LA",
  billing_postal_code: "100001",
  billing_country: "NG"
});
console.log(response);
```

### Virtual Accounts
```typescript
const response = await flw.virtualAccounts.create({
  email: "newcustomer@example.com",
  is_permanent: true,
  bvn: "12345678901",
  tx_ref: "VA-12345"
});
console.log(response);
``` 

### Bill Payments
```typescript
const response = await flw.bills.pay({
  country: "NG",
  customer: "08012345678",
  amount: 1000,
  recurrence: "ONCE",
  type: "AIRTIME",
  reference: "bill-1234"
});
console.log(response);
```

### Transactions
```typescript
const response = await flw.transactions.verify({ id: "123456789" });

console.log(response);
```

### Banks
```typescript
const response = await flw.banks.list({ country: "NG" });
console.log(response);
```

### Settlements
```typescript
const response = await flw.settlements.fetch({ from: "2023-01-01", to: "2023-02-01" });
console.log(response);
```

### OTP
```typescript
const response = await flw.otp.create({ length: 6, customer: "user@example.com", send: true });
console.log(response);
```

### eBills
```typescript
const response = await flw.ebills.create({
  currency: "NGN",
  amount: 5000,
  email: "customer@example.com",
  tx_ref: "EBILL-12345"
});
console.log(response);
```

### Miscellaneous
```typescript
const response = await flw.misc.fetchBalance({ currency: "NGN" });
console.log(response);
```

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.