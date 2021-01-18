import express from 'express'
import morgan from 'morgan'
import videoRoutes from './routes/videoCRM/videos.routes'
import itemRoutes from './routes/itemCRM/items.routes'
import entriesRouter from './routes/entryCRM/entries.routes'
import cors from 'cors'

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(videoRoutes,itemRoutes, entriesRouter)


export default app;