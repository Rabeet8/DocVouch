# **DocVouch**

## Overview

The **DocVouch** allows users to upload documents to **IPFS (InterPlanetary File System)** for storage while ensuring the document's integrity by storing a unique **`keccak256` hash** of the document on the **Ethereum blockchain**. The document itself is stored off-chain, but its hash is securely anchored on-chain to ensure immutability and authenticity.

### Key Features:
- Upload documents to IPFS to generate a hash.
- Convert the IPFS hash to `bytes32` format using `keccak256` and store it on the blockchain.
- Lightweight, cost-effective, and efficient use of blockchain for document verification.

### Video Demonstration:
---
https://github.com/user-attachments/assets/68b510ba-93b0-4c16-ba1d-8d165ef12b16


### User Flow Diagram:
---
![Screenshot (416)](https://github.com/user-attachments/assets/6bff2322-13bf-4747-b297-ff81ff8a7893)


## Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Installation](#installation)

---

## Features

- **Document Upload**: Upload any document (PDF, Word, etc.) to IPFS.
- **IPFS Hash Generation**: Each uploaded document generates a unique IPFS hash (CID).
- **Blockchain Storage**: Convert the IPFS hash to a `keccak256` `bytes32` hash and store it on the Ethereum blockchain.
- **Secure & Immutable**: The blockchain ensures that once the hash is stored, it cannot be altered, maintaining the integrity of the document.

---

## Architecture

This project consists of two primary components:

1. **IPFS Storage (Off-Chain)**:
   - Documents are uploaded to IPFS, a decentralized file storage system.
   - IPFS returns a content identifier (CID) for each file uploaded, which serves as the unique hash.

2. **Ethereum Blockchain (On-Chain)**:
   - The IPFS hash is converted to a `keccak256` `bytes32` hash.
   - The hash is stored on the Ethereum blockchain using a smart contract, making it immutable and verifiable.

---

## Installation

### Prerequisites
To run this project locally, you'll need to have the following installed:

- **React**: To run the front-end.
- **Remix**: For Ethereum smart contract development.
- **IPFS Client**: To interact with the IPFS network.
- **Ethereum Wallet**: For interacting with the Ethereum blockchain (e.g., MetaMask).

### Steps

1. Clone the repository:
   ```bash
   git clone(https://github.com/Rabeet8/DocVouch.git)
   cd DocVouch

2. Install Dependencies:
```
npm install


