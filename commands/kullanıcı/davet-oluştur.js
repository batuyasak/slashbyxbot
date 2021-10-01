const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('davet-oluştur')
    .setDescription('Sunucunun davetini olurşturursunuz.'),
  async execute (interaction) {
    
        let invite = await interaction.channel.createInvite();   
     
      const embed = new MessageEmbed()
      .setDescription('**Bu Sunucunun Davet Linkini Kurdum.**\n'
      + '**Link Aşağıda**'
      + ' **Bu Sunucun Davet Linki **\n' +
      `**https://discord.gg/${invite.code}**`)
      .setColor("RANDOM")
      interaction.reply({embeds:[embed]})
      
  }}