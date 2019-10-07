class UserStore {
    constructor(database) {
        this.database = database;
    }

    create(user) {
        database.save('user', user);
    }
}

export default UserStore;