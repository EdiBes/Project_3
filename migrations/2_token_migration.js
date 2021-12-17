const LVToken = artifacts.require("LVToken");

module.exports = function (deployer) {
  deployer.deploy(LVToken);
};
