const Realm = require('realm');
const { getUsers } = require('./realmClient');

const RealmClient = require('./realmClient');

const user3 = {
    id: 3,
    status: "Pending",            
    meta: "{ }",
}

const push = async() => {
    await RealmClient.addUser(user3);
}

const pull = async() => {
    await RealmClient.getUsers();
}

pull();