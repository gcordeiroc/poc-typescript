import { Response, Request } from "express";

export class Controller {
    public index = async (req: Request, res: Response) => {
        res.send('index');
    }

    public create = async (req: Request, res: Response) => {
        res.send('create');
    }

    public update = async (req: Request, res: Response) => {
        res.send('update');
    }

    public delete = async (req: Request, res: Response) => {
        res.send('delete');
    }
}