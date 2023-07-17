const { catchedAsync } = require("../utils");

module.exports = {
    getCharacter: catchedAsync(require("./getCharacter")),
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter")),
    deleteCharacter: catchedAsync(require("./deleteCharacter")),
}