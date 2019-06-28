import {
	Controller,
	Post,
	Req,
	Request,
	Get
} from '@nestjs/common';
import { DoodleService } from './doodle.service';


@Controller('doodle')
export class DoodleController {
	constructor(private readonly doodleService: DoodleService) {}

	@Post()
	async createDoodle(
		@Req() req : Request
	): Promise<Object> {		
		return await this.doodleService.createDoodle(req.body as any);
	}

	@Get()
	async getDoodles(): Promise<Object> {		
		return await this.doodleService.getDoodles();
	}
}
