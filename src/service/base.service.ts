import { Inject, Provide, } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import Utils from '../common/utils';
import User from '../entity/user.entity';

@Provide()
export class BaseService {
    @Inject()
    utils: Utils;
    @InjectEntityModel(User)
    userModel: Repository<User>;
}
