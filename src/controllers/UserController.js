class UserController {
    constructor(createUserInteractor) {
        this.createUserInteractor = createUserInteractor;
    }

    createUser() {
        this.createUserInteractor.execute();
    }
}

export default UserController;