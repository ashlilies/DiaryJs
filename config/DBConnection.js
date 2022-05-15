const db = require("./DBConfig")

/*
 * If drop is true, all existing tables are dropped and re-created.
 */
const setupDb = (drop) => {
    db.authenticate()
        .then(() => {
            console.log("Database connected");
            db.sync({
                force: drop
            });
        })
        .catch(err => console.log(err));
}

module.exports = {setupDb};