import { Router } from "express";
import { Controller } from "../controllers/controller";

export class Routes {
    private controller: Controller
    public router: Router;

    constructor() {
        this.router = Router();
        this.controller = new Controller();
    }


    public routes() {
        this.router.get('/', this.controller.index);
        this.router.post('/', this.controller.create);
        this.router.patch('/', this.controller.update);
        this.router.delete('/', this.controller.delete);
    }
}