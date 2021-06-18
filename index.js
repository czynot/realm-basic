const Realm = require('realm');

const UserSchema = {
    name: "User",
    properties: {
        id: "int",
        status: "string",
        meta: "string",
    },
    primaryKey: "id",
};

async function addUser() {
    const realm = await Realm.open({
        path: "users-lobby",
        schema: [UserSchema],
    });

    let user1;
    realm.write(() => {
        user1 = realm.create("User", {
            id: 1,
            status: "Pending",
            meta: "{ }",
        });
        console.log(`Created user ${user1.id} with status ${user1.status}`)
    });
};

async function getUsers() {
    const realm = await Realm.open({
        path: "users-lobby",
        schema: [UserSchema],
    });

    const users = realm.objects("User");
    console.log(`The lists of user are: ${users.map((user) => user.id)}`);
}

getUsers();