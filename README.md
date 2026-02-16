# Robinhood Chain Testnet Starter Kit (Hardhat + Demo dApp)

A simple starter kit to deploy contracts on Robinhood Chain testnet and connect a small frontend.

## Network
- Chain ID: 46630
- RPC: https://rpc.testnet.chain.robinhood.com
- Explorer: https://explorer.testnet.chain.robinhood.com

## Quickstart
1) Install deps
   npm i

2) Add .env
   cp .env.example .env

3) Compile
   npx hardhat compile

4) Deploy
   npx hardhat run scripts/deploy.js --network rh_testnet# robinhood-testnet-starter
Robinhood Chain testnet starter kit: contracts + deploy scripts + demo dApp (Next.js)
