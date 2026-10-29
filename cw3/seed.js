const { sequelize, List, Tag, Note } = require("./models");

async function seed() {
    try{
        await sequelize.sync({ force: true });
        console.log("tables created succesfully");

        const listWork = await List.create({ name: "Work and study"});
        const listHome = await List.create({ name: "Personal"});

        const tagUrgent = await Tag.create({ name: "Urgent"});
        const tagEasy = await Tag.create({ name: "Easy"});

        await Note.bulkCreate([
            {
                title: "лаба пайплан",
                description: "Выполнить работу и прикрепить в кабинете",
                isCompleted: false,
                listId: listWork.id,
                tagId: tagUrgent.id
            },
            { 
                title: "Повторить лекцию", 
                description: "Почитать про ORM Sequelize", 
                isCompleted: true, // Эта задача уже выполнена!
                listId: listWork.id, 
                tagId: tagEasy.id 
            },
            { 
                title: "Купить продукты", 
                description: "Хлеб, молоко, фрукты", 
                isCompleted: false, 
                listId: listHome.id, 
                tagId: tagEasy.id 
            }
        ]);

        console.log("data added succesfully");
    } catch (error) {
        console.error("dataError", error);
    } finally {
        await sequelize.close();
    }
}

seed();