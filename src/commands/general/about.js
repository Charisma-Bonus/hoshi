const { Command } = require('discord-akairo');

const botName = require('../../../config.json').botName;

class AboutCommand extends Command {
	constructor() {
		super("about", {
      aliases: ["about", "info"],
      category: "general",
      clientPermissions: ["EMBED_LINKS"],
      description: { content: `Shows information about ${botName}.` },
    });
	}

	exec(message) {
		const prefix = this.handler.prefix(message);
		const comp = this.client.users.get('123992700587343872');
		const grey = this.client.users.get('86890631690977280');

		const embed = this.client.util
      .embed()
      .setColor(0xffac33)
      .setTitle(`About ${botName}`)
      .setDescription([
        `${botName} is developed by **${comp.tag}** and **${grey.tag}**.`,
        "",
        `${botName} uses the **[Discord.js](https://discord.js.org)** library and the **[Akairo](https://1computer1.github.io/discord-akairo)** framework.`,
        `You can find the Github repo for ${botName} **[here](https://github.com/CharismaBonus/hoshi)**.`,
        "",
        `Use \`${prefix}stats\` for statistics and \`${prefix}invite\` for an invite link.`,
      ]);

		return message.util.send({ embed });
	}
}

module.exports = AboutCommand;
