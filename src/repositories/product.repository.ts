import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InMemoryDbDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.ID,
  ProductRelations
> {
  constructor(
    @inject('datasources.inMemoryDB') dataSource: InMemoryDbDataSource,
  ) {
    super(Product, dataSource);
  }
}
