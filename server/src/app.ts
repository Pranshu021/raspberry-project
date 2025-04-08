import express from 'express';
const cors = require('cors');
import routes from './routes/routes'
import { Request, Response, NextFunction } from 'express';


const app = express();

app.use(cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(`[+] Request recieved from ${req.ip} ${req.path}`)
        next();
    } catch(error) {
        console.error(error);
    }

})

app.use('/api/', routes);




export default app

