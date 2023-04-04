import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll(): string {
    return 'Hello world';
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
