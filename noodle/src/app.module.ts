import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from './modules/config/config.module';
import { NoodleModule } from './modules/noodle/noodle.module';

@Module({
	imports: [
		NoodleModule,
		ConfigModule,
	],
	exports: [],
})
export class AppModule {}
