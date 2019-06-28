import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/db/database.module';
import { DoodleModule } from './modules/doodle/doodle.module';

@Module({
	imports: [
		DoodleModule,
		ConfigModule,
		DatabaseModule
	],
	exports: [],
})
export class AppModule {}
