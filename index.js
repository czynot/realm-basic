const Realm = require('realm');

const RealmClient = require('./realmClient');

const user2 = {
    id: 2,
    status: "Pending",            
    meta: "{ }",
}

const push = async() => {
    await RealmClient.addUser(user2);
}

push();