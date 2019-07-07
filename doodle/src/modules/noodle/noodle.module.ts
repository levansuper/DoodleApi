import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from './../config/config.module';
import { NoodleService } from './noodle.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [NoodleService],
  exports: [NoodleService]
})

export class NoodleModule {}