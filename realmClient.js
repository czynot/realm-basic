var UserSchema = require('./schemaConfig')
const Realm = require('realm');

class RealmClient {

    async addUser(data) {
        let realm = await Realm.open({
            path: "users-lobby",
            schema: [UserSchema.schema],
        });
        
        realm.write(() => {
            realm.create("User", data);
            console.log(`Created user`)
        });
    };
}

module.exports = new RealmClient();