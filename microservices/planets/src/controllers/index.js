const { catchedAsync } = require("../utils");

module.exports = {
    getPlanet: catchedAsync(require("./getPlanet")),
    getPlanets: catchedAsync(require("./getPlanets")),
    createPlanet: catchedAsync(require("./createPlanet")),
    updatePlanet: catchedAsync(require("./updatePlanet")),
    deletePlanet: catchedAsync(require("./deletePlanet")),
}