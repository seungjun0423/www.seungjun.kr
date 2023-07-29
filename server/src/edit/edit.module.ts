import { Module } from '@nestjs/common';
import { EditController } from './edit.controller';
import { EditService } from './edit.service';

@Module({
  controllers: [EditController],
  providers: [EditService]
})
export class EditModule {}
