import { sequelize } from '../config/database';
import { Product } from './Product';
import { Category } from './Category';

const init = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

init();

export { Product, Category };