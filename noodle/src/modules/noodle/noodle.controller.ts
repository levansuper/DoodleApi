import {
	Controller,
	Get
} from '@nestjs/common';



@Controller('noodle')
export class NoodleController {

	@Get()
	async getDoodles(): Promise<Object> {		
		return {
			weight : Math.floor(Math.random() * 1000)
		};
	}
}
