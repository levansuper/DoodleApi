import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { DoodleModel } from './entities/doodle.model';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (config: ConfigService) => {
				const {
					DATABASE_USER,
					DATABASE_PASSWORD,
					DATABASE_DATABASE,
					DATABASE_HOST,
					DATABASE_ENTITY_PREFIX,
				} = config.getEnvConfig();
				return {
					type: 'mysql' as 'mysql',
					host: DATABASE_HOST,
					port: 3306,
					username: DATABASE_USER,
					password: DATABASE_PASSWORD,
					database: DATABASE_DATABASE,
					entities: [DoodleModel],
					entityPrefix: DATABASE_ENTITY_PREFIX,
					synchronize: true,
					logging: false,
					namingStrategy: new SnakeNamingStrategy(),
				};
			},
		}),
		TypeOrmModule.forFeature([DoodleModel]),
	],
	exports: [TypeOrmModule],
})
export class DatabaseModule {}
