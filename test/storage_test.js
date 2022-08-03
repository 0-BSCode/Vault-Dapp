let Storage = artifacts.require("Storage");

contract("Storage", (accounts) => {
  it("Contract should be deployed", async () => {
    let storageInstance = await Storage.deployed();
    assert(storageInstance !== undefined, "Storage instance should be defined");
  });

  it("Contract owner should be accounts[0]", async () => {
    let storage = await Storage.deployed();
    let owner = await storage.owner();
    assert(owner == accounts[0], "Owner isn't equal to accounts[0]");
  });

  it("Contract owner should be accounts[2]", async () => {
    let storage = await Storage.deployed({ from: accounts[2] });
    let owner = await storage.owner();
    assert(owner == accounts[0], "Owner isn't equal to accounts[0]");
  });

  it("Deposit amount should reflect in contract balance", async () => {
    let storageInstance = await Storage.deployed();
    let expectedBalance = web3.utils.toWei("1", "ether");
    let { logs } = await storageInstance.deposit({
      from: accounts[2],
      value: expectedBalance,
    });
    let actualBalance = await storageInstance.viewBalance({
      from: accounts[2],
    });
    let contractBalance = await web3.eth.getBalance(storageInstance.address);
    console.log(logs);
    assert(
      expectedBalance.valueOf().toString() ===
        actualBalance.valueOf().toString() &&
        actualBalance.valueOf().toString() ===
          contractBalance.valueOf().toString(),
      "Expected balance isn't equal to actual balance"
    );
  });

  it("User should be able to withdraw from account", async () => {
    let storageInstance = await Storage.deployed();
    let { logs } = await storageInstance.withdraw(
      web3.utils.toWei("1", "ether"),
      { from: accounts[2] }
    );

    assert(
      logs[0].event === "Withdrawal",
      "Withdrawal event should be emitted"
    );
  });

  it("User shouldn't be able to withdraw more than his balance", async () => {
    let storageInstance = await Storage.deployed();
    let err = null;
    try {
      await storageInstance.withdraw(web3.utils.toWei("5", "ether"), {
        from: accounts[2],
      });
    } catch (e) {
      err = e;
    }

    assert(
      err instanceof Error,
      "User is able to withdraw an amount greater than balance"
    );
  });
});
