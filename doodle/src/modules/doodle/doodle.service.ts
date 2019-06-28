import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoodleModel } from '../db/entities/doodle.model';

@Injectable()
export class DoodleService {
	constructor(
		@InjectRepository(DoodleModel) private doodleRepository: Repository<DoodleModel>,
	) {}

	async createDoodle(doodleData : { name : string}): Promise<Object> {
			const newDoodle = new DoodleModel();
			newDoodle.name = doodleData.name;
			return await this.doodleRepository.save(newDoodle);
	}

	async getDoodles(): Promise<Object> {
			return await this.doodleRepository.findAndCount();
	}
}
