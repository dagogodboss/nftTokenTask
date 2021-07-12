
const { expectRevert } = require('@openzeppelin/test-helpers')

const CHARACTER_NAME = "Shrek"

contract('GameAnime', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const GameAnime = artifacts.require('GameAnime.sol')
    const defaultAccount = accounts[0]

    let link, dnd

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        dnd = await GameAnime.new({ from: defaultAccount })
    })
    // TODO
})
