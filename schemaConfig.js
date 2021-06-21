var userSchema = {
    name: "User",
    properties: {
        id: "int",
        status: "string",
        meta: "string",
    },
    primaryKey: "id",
};

exports.schema = userSchema;