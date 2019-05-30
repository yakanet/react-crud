import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import { json, urlencoded } from 'body-parser';
import router from "./routes";
const app: express.Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use('/', router);

const port = process.env.PORT || 3001;
http.createServer(app).listen(port, () => console.log(`server started on port ${port}`));
