var Schema = require('./schemaConfig')
const Realm = require('realm');

class RealmClient {
    async addUser(data) {
        let realm = await Realm.open({
            path: "users-lobby",
            schema: [Schema.userSchema],
        });
        
        realm.write(() => {
            realm.create("User", data);
            console.log(`Created user with id ${data.id}`)
        });
    };

    async getUsers() {
        let realm = await Realm.open({
            path: "users-lobby",
            schema: [Schema.userSchema],
        });

        const users = realm.objects("User");
        // console.log(`The lists of users are: ${users.map((user) => user.id)}`);
        console.log(JSON.stringify(users));
    }
}

module.exports = new RealmClient();