const db = require('croxydb')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, Permissions} = require('discord.js')
const { simpleEmbed } = require('../../utilities')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('birisini banlarsınız')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true)),
  async execute (interaction) {
    if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      return await interaction.reply(simpleEmbed('Bu Komutu Kullanmak İçin `Üyeleri Engelle` Yetkisi Olması Gerek.', true))
    }
    const user = interaction.options.getUser('kişi');
    let modlog = db.fetch(`modlog_${interaction.guild.id}`)
    if (user.id == interaction.user.id) return interaction.reply({embeds:[new MessageEmbed().setDescription(`Bu eylemi kendi üzerinizde gerçekleştiremezsiniz.` )]});
    if (user.id == interaction.client.user.id) return interaction.reply({embeds:[new MessageEmbed().setDescription(`Bu eylemi bot üzerinde gerçekleştiremezsiniz.`)]});
    if (!await interaction.guild.bans.fetch().then(async (banneds) => banneds.find((value) => value.user.id == user.id))) return interaction.reply({embeds:[new MessageEmbed().setDescription(`:x: Kullanıcı id hatalı veya kullanıcı yasaklı değil!`)]});
await interaction.guild.members.unban(user);
    const embed = new MessageEmbed()
    .setColor('BLACK')
	 .setAuthor("UNBAN LOG")
     .setFooter(`${interaction.client.user.username} DESTEK`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
	 .addField('**Banı kaldırılan kullanıcı**', `${user} (\`${user.id}\`)`)
	 .addField('Yetkili', `<@${interaction.user.id}>`)
     interaction.reply({embeds:[embed]}).then(setTimeout(() => interaction.deleteReply(), 6000))
     if (modlog) interaction.guild.channels.cache.get(modlog).send({embeds:[embed]}).catch()
    
},
}