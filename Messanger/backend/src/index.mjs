import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import databaseSetup from './config/databaseSetup.mjs';
import router from './route/router.mjs';

await databaseSetup();


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});