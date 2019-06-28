import { Module } from '@nestjs/common';
import { DoodleController } from './doodle.controller';
import { DoodleService } from './doodle.service';
import { DatabaseModule } from '../db/database.module';

@Module({
	imports: [DatabaseModule],
	exports: [DatabaseModule],
	controllers: [DoodleController],
	providers: [DoodleService],
})
export class DoodleModule {}
