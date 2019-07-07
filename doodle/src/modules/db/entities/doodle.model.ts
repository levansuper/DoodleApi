import {
	Entity,
	Column,
	PrimaryGeneratedColumn
} from 'typeorm';


@Entity('doodle')
export class DoodleModel {
	@PrimaryGeneratedColumn()
	id: string;
	
	@Column()
	name: string;

	@Column()
	noodleWeight: number;

}
