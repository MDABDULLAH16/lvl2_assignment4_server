import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port server ${config.port}`);
    });
  } catch (err) {
    next(err);
  }
}

main();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function next(err: unknown) {
  throw new Error('Function not implemented.');
}
