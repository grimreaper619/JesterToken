const JesterToken = artifacts.require("JesterToken");

module.exports = function (deployer) {
  deployer.deploy(JesterToken);
};
