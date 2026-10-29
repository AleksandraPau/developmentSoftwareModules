const { List, Tag, Note } = require("./models");

async function runQueries() {
    try {
        console.log("==1.All notes (foindAll)==");
        const allNotes = await Note.findAll();
        console.log(JSON.stringify(allNotes, null, 2));
    } catch (error) {
        console.log("Error while executing requests:", error);
    }
}

runQueries();