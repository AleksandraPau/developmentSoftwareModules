const { List, Tag, Note } = require("./models");

async function runQueries() {
    try {
        console.log("==1.All notes (foindAll)==");
        const allNotes = await Note.findAll();
        console.log(JSON.stringify(allNotes, null, 2));

        console.log("\n== 2. СВЯЗАННЫЕ ДАННЫЕ (findAll + include Списка и Тега) ==");
        const fullNotes = await Note.findAll({
        include: [List, Tag]
        });
        console.log(JSON.stringify(fullNotes, null, 2));

        console.log("\n== 3. ПОИСК ТОЛЬКО НЕВЫПОЛНЕННЫХ ЗАДАЧ (findAll + where) ==");
        const activeNotes = await Note.findAll({
        where: { isCompleted: false } 
        });
        console.log(JSON.stringify(activeNotes, null, 2));

        console.log("\n== 4. СОЗДАТЬ НОВУЮ ЗАМЕТКУ (create) ==");
        const newNote = await Note.create({
        title: "Выгулять собаку",
        description: "Вечером около 19:00",
        isCompleted: false,
        listId: 2
        });
        console.log(`Создана новая заметка с ID: ${newNote.id}`);

    } catch (error) {
        console.error("Ошибка при выполнении запросов:", error);
    }
}

runQueries();