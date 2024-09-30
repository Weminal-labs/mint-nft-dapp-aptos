export const NETWORK = import.meta.env.VITE_APP_NETWORK ?? "testnet";
export const MODULE_ADDRESS =
  NETWORK === "mainnet"
    ? "0x96c192a4e3c529f0f6b3567f1281676012ce65ba4bb0a9b20b46dec4e371cccd"
    : "0x7768e9bcb09adfe6dbbee3a103951ad6199ea2eaa2e7cf78c5feae7a55a0e9d3";
export const MODULE_NAME = "launchpad";
export const COLLECTION_ADDRESS = import.meta.env.VITE_COLLECTION_ADDRESS;
export const IS_DEV = Boolean(import.meta.env.DEV);
export const OCTA = 100000000;
