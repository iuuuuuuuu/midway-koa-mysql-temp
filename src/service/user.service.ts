import { Provide } from '@midwayjs/core';
import { BaseService } from './base.service';
import { UserDTO } from '../dto/user.dto';
import User from '../entity/user.entity';


@Provide()
export class UserService extends BaseService {
  async add(user: UserDTO) {
    const data = new User();
    data.username = user.username;
    data.password = this.utils.encrypt('sha256', user.password);
    return await this.userModel.save(data);
  }
  async find(may: any) {
    return await this.userModel.findOne({
      where: may,
    });
  }
  async finds(may: any) {
    const [list, total] = await this.userModel.findAndCount({
      where: may,
    });
    return {
      list,
      total,
    }
  }
  async update(may: any, user) {
    return await this.userModel.update(may, user);
  }
  async delete(may: any) {
    return await this.userModel.delete(may);
  }
}
