import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config: ConfigService = app.get(ConfigService);
	const { API_PORT } = config.getEnvConfig();
	console.log(API_PORT)
	await app.listen(API_PORT);
}
bootstrap();
