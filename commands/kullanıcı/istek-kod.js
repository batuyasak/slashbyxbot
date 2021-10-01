const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('istek-kod')
    .setDescription('İstek bir kod bildirirsin.')
    .addStringOption(option => 
        option.setName('istek')
        .setDescription('Bir istek bildir')
        .setRequired(true)),
  async execute (interaction) {
    let istek = interaction.options.getString('istek');
const embedCrewCode = new MessageEmbed()
.setTitle("ByX İstek Sistemi")
.setColor('BLUE')
.setDescription(`**istek Kanalı** ${interaction.channel.name} \n **istek Bildirilen Sunucu** \`${interaction.guild.name}\` \n **İstek Bildiren Kullanıcı** ${interaction.user.tag} \n **İstenen komut :** \`${istek}\``)
interaction.client.channels.cache.get('885250904771682365').send({embeds:[embedCrewCode]})
interaction.reply("İstek kod  bildiriminiz gönderildi. :confetti_ball:").then(setTimeout(() => interaction.deleteReply(), 6000))
  }
}