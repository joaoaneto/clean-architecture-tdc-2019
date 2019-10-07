class UserStore {
    constructor(database) {
        this.database = database;
    }

    create(user) {
        this.database.save('user', user);
    }
}

export default UserStore;