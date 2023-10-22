const Token = artifacts.require("CarbonCred");

module.exports = async function(deployer){

  // deploy legacy Token contract
  await deployer.deploy(Token,"Token Name","Symbol","Total Supply","initial supply"," Beneficiary address ");
  const TokenContract = await Token.deployed();

  console.log('\n*************************************************************************\n')
  console.log(`Token Contract Address: ${TokenContract.address}`)
  console.log('\n*************************************************************************\n')
  
}





