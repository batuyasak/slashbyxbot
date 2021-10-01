const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')
const { MessageEmbed, GuildMember, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Bir kullanıcının avatarı hakkında bilgi verir.')
    .addMentionableOption(option => option.setName('kişi').setDescription('Avatarın alınacağı kullanıcı.').setRequired(true)),
  async execute (interaction) {
    const member = interaction.options.getMentionable('kişi')
    if (!(member instanceof GuildMember)) {
      return await interaction.reply(simpleEmbed('Yalnızca geçerli bir kullanıcı belirtebilirsiniz!', true))
    }

    const avatar = member.user.displayAvatarURL({ format: 'png', size: 1024 })
    const embed = new MessageEmbed()
      .setColor("#910000")
      .setImage(avatar)
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL(avatar)
					.setLabel('Avatar URL')
					.setStyle('LINK'),
			);
    await interaction.reply({ embeds: [embed] , components: [row] })
  }
}