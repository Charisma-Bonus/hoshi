const { Listener } = require('discord-akairo');
const Logger = require('../../util/Logger');
const Starboard = require('../../struct/Starboard');
const botName = require('../../../config.json').botName;

class ReadyListener extends Listener {
	constructor() {
		super('ready', {
			event: 'ready',
			emitter: 'client',
			category: 'client'
		});
	}

	exec() {
		Logger.info(`${this.client.user.tag} is ready to serve!`);
		this.client.user.setActivity(`@${botName} help`);

		for (const guild of this.client.guilds.values()) {
			const starboard = new Starboard(guild);
			this.client.starboards.set(guild.id, starboard);
		}
	}
}

module.exports = ReadyListener;
