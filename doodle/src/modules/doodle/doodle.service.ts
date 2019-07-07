import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoodleModel } from '../db/entities/doodle.model';
import { NoodleService } from './../noodle/noodle.service';

@Injectable()
export class DoodleService {
	constructor(
		@InjectRepository(DoodleModel) private doodleRepository: Repository<DoodleModel>,
		private noodleService : NoodleService,
	) {}

	async createDoodle(doodleData : { name : string}): Promise<Object> {
			const noodle = await this.noodleService.getNoodles() as any;	
			const newDoodle = new DoodleModel();
			newDoodle.name = doodleData.name;
			newDoodle.noodleWeight = noodle.weight;
			
			return await this.doodleRepository.save(newDoodle);
	}

	async getDoodles(): Promise<Object> {
			return await this.doodleRepository.findAndCount();
	}
}
