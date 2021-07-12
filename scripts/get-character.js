const gameAnime = artifacts.require('GameAnime')

module.exports = async callback => {
    const dnd = await gameAnime.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await dnd.characters(0)
    console.log(overview)
    callback(overview.tx)
}
