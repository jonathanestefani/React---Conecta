import 'reflect-metadata';
import connectDatabase from '../config/data-source';

connectDatabase.initialize().then(async () => {
  connectDatabase
    .transaction(async () => {
      try {
        console.log('Seeds executed successfully.');

        process.exit(0);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
      process.exit(0);
    });
});
