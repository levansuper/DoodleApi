import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from './../config/config.service';
import { map } from 'rxjs/operators';


@Injectable()
export class NoodleService {
    constructor(private http: HttpService, private config: ConfigService){}

	public async getNoodles() {
		const { NOODLE_URL } = this.config.getEnvConfig();
		return this.http.get(NOODLE_URL)
		.pipe(
			map(response => response.data)
		);
		
}
}
