import { Module } from '@nestjs/common';
import { NoodleController } from './noodle.controller';

@Module({
	controllers: [NoodleController],
})
export class NoodleModule {}
