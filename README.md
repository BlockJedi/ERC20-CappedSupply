# ERC20-CappedSupply
Erc20 Token with capped supply

## Prerequisite
1- Node
2- Truffle

## Changes required.

Change Name, Symbol, Initial Supply, Capped Supply and Benficary address in 1_deploy_contracts.js Line:6
```
await deployer.deploy(Token,"Token Name","Symbol","Total Supply","initial supply","0x7184cEA3B8C956801e10fA6aa8e1907956b4a2f7");
eg.
await deployer.deploy(Token,"Test Token","TT",10000000,1000," Beneficiary address ");

```

Change name of Contract in contract file.

## Command to deploy contract
See Truffle-Config.js file to sepelect you specific network
```
truffle migrate --network {network name} --reset
```

## Command to verify contract
```
truffle run verify {Contract Name} --network {network name}
```

