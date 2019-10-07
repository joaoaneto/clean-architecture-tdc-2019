import User from "entities/User";

class CreateUser {
    constructor(userStore) {
        this.userStore = userStore;
    }

    execute(name) {
        const user = new User(name);
        this.userStore.create(user);
    }
};

export default CreateUser;