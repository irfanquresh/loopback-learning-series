import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDbDataSource} from '../datasources';
import {Student, StudentRelations} from '../models';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.ID,
  StudentRelations
> {
  constructor(
    @inject('datasources.mysqlDB') dataSource: MysqlDbDataSource,
  ) {
    super(Student, dataSource);
  }
}
