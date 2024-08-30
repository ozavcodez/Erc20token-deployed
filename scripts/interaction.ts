import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xac712F6e04C731C987D8d95e3Ad2611445B763e2";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x7e3f9F274131817d2D2F7d98e2D4A5D474Dd5896";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    const withdrawalAmount = ethers.parseUnits("100", 18);
    
    const withdrawTx = await saveERC20.withdraw(withdrawalAmount);

    console.log(withdrawTx);

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance()

    console.log("Contract balance after  withdrawal:::", contractBalanceAfterWithdrawal)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
