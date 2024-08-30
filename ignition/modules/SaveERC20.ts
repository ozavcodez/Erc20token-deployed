import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xac712F6e04C731C987D8d95e3Ad2611445B763e2";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1

// SaveErc20 0x7e3f9F274131817d2D2F7d98e2D4A5D474Dd5896