import mongoose from 'mongoose';
import app from './app';
import config from './config';
async function router() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Tour and Travel project on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

router();
