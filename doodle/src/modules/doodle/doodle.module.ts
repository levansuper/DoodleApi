import { Module } from '@nestjs/common';
import { DoodleController } from './doodle.controller';
import { DoodleService } from './doodle.service';
import { DatabaseModule } from '../db/database.module';
import { NoodleModule } from './../noodle/noodle.module';

@Module({
	imports: [DatabaseModule, NoodleModule],
	exports: [DatabaseModule],
	controllers: [DoodleController],
	providers: [DoodleService],
})
export class DoodleModule {}
