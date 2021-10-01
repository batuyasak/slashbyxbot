const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('bug-bildir')
    .setDescription('Bota soru sorarsın.')
    .addStringOption(option => 
        option.setName('sorun')
        .setDescription('Bir sorun bildir')
        .setRequired(true)),
  async execute (interaction) {
    let cmf = interaction.options.getString('sorun');
    let user = interaction.user.tag;
    let guild = interaction.guild.name;
    let guildid = interaction.guild.id;
    let kanal = interaction.channel.name;
    let channel = interaction.client.channels.cache.get("885250904771682365") //kayıtların tutulacağı kanal id sini girin
    
    let emf = new MessageEmbed()
    .setTitle("Hata-Bug Rapor")
    .setThumbnail("https://cdn.discordapp.com/attachments/883065568549290034/883065792273457202/png-transparent-software-bug-symbol-computer-icons-bug-computer-black-silhouette-computer-programmin.png")
    .addField('Hata-Bug', cmf, true)
    .addField('Rapor Eden', user, true)
    .addField('Sunucu', guild, true)
    .addField('Sunucu ID', guildid, true)
    .addField('Kanal', kanal, true)
    .setColor("#f49542")
    channel.send({embeds: [emf]})
    
    interaction.reply(":white_check_mark:  **| Bug - Hata Raporu Başarı İle İletildi.**").then(setTimeout(() => interaction.deleteReply(), 6000))
  }
}