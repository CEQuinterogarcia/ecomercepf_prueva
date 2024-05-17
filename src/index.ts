import { sequelize } from './config/database';
import { Product } from './models/Product';
import { Category } from './models/Category';

const run = async () => {
  try {
    // Conectar a la base de datos
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Crear una nueva categoría
    const newCategory = await Category.create({ name: 'Phone' } as any);

    // Crear un nuevo producto en la categoría creada
    const newProduct = await Product.create({ 
      name: 'JavaScript: The Good Parts', 
      description: 'A book about JavaScript',
      price: 2999,
      categoryId: newCategory.id,
    } as any);

    // Leer productos
    const products = await Product.findAll({
      include: [Category],
    });
    console.log('All products:', JSON.stringify(products, null, 2));

    // Actualizar un producto
    const [updatedCount] = await Product.update(
      { price: 1999 },
      { where: { id: newProduct.id } }
    );
    console.log(`Updated ${updatedCount} product(s)`);

    // // Eliminar un producto
    // const deletedProduct = await Product.destroy({ where: { id: newProduct.id } });
    // console.log(`Deleted product with id: ${newProduct.id}`);

    // // Eliminar una categoría
    // const deletedCategory = await Category.destroy({ where: { id: newCategory.id } });
    // console.log(`Deleted category with id: ${newCategory.id}`);

    console.log('CRUD operations completed successfully.');
  } catch (error) {
    console.error('Unable to perform CRUD operations:', error);
  }
};

run();