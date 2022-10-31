require('dotenv').config();
import { app } from './app';

const PORT = process.env.PORT;
app.listen(3333, () => console.log('Server is running 🚀' + PORT));
