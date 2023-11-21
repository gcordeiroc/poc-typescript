import express, {Request, Response} from 'express';
import { Routes } from './routes/routes';

class Server {
    private app: express.Application;
    private routes: Routes;

    constructor() {
        this.app = express();
        this.configurations();
        this.routes = new Routes();
        this.router();
    }

    public configurations() {
        this.app.set('port', process.env.PORT || 3000);
    }

    public router() {
        this.app.use('/api', this.routes.routes);
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Ta funfando :D');
        })
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Ta ouvindo');
        })
    }
}

const server = new Server();
server.start();