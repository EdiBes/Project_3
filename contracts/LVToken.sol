pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract LVToken is ERC1155 {
    uint256 constant tokenId = 0;

    constructor() ERC1155("") {
        _mint(msg.sender, tokenId, 10000000, "");
    }
}
