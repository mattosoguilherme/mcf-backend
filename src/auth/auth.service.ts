import { Injectable } from '@nestjs/common';
import { LoginInputDto } from './dto/loginInput.dto';


@Injectable()
export class AuthService {
  create(LoginInputDto: LoginInputDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }


  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
