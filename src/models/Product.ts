import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from './Category';

@Table
export class Product extends Model<Product> {
  @Column
  name!: string;

  @Column
  description!: string;

  @Column
  price!: number;

  @ForeignKey(() => Category)
  @Column
  categoryId!: number;

  @BelongsTo(() => Category)
  category!: Category;
}
