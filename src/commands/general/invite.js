const { Command } = require('discord-akairo');
const botName = require('../../../config.json').botName;

class InviteCommand extends Command {
	constructor() {
		super("invite", {
      aliases: ["invite"],
      category: "general",
      clientPermissions: ["EMBED_LINKS"],
      description: { content: `Gets the bot invite for ${botName}.` },
    });
	}

	async fetchInvite() {
		if (this.invite) return this.invite;
		const invite = await this.client.generateInvite([
			'VIEW_CHANNEL',
			'MANAGE_MESSAGES',
			'READ_MESSAGE_HISTORY',
			'SEND_MESSAGES',
			'EMBED_LINKS'
		]);

		this.invite = invite;
		return invite;
	}

	async exec(message) {
		const embed = this.client.util
      .embed()
      .setColor(0xffac33)
      .setDescription(
        `**[Add ${botName} to your server!](${await this.fetchInvite()})**`
      );

		return message.util.send({ embed });
	}
}

module.exports = InviteCommand;
