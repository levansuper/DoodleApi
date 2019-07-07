import Env from './../../env';

export class ConfigService {
	private readonly envConfig: { [key: string]: string };

	constructor() {
		const env = new Env();
		this.envConfig = {
			...env,
			...process.env,
		};
	}

	public getEnvConfig() {
		return this.envConfig;
	}
}
