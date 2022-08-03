let Storage = artifacts.require("Storage");

let storageInstance;

contract("Storage", (accounts) => {
  it("Contract should be deployed", async () => {
    storageInstance = Storage.deployed();
    assert(storageInstance !== undefined, "storage instance should be defined");
  });

  it("Contract owner should be accounts[0]", async () => {
    let storage = Storage.deployed();
    let owner = storage.owner;
    assert(owner == accounts[0], "owner isn't equal to accounts[0]");
  });
});
