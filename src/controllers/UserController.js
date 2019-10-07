class UserController {
    constructor(createUserInteractor) {
        this.createUserInteractor = createUserInteractor;
    }

    createUser(req, res) {
        try {
            this.createUserInteractor.execute(req.body.name);
            res.end();
        } catch (error) {
            res.status(500).send(error.message);
        }

    }
}

export default UserController;