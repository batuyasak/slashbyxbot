const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('intihar')
    .setDescription('İntihar edersin.')
    .addStringOption(option => 
        option.setName('sebep')
        .setDescription('Bir sebep belirt.')
        .setRequired(true)),
  async execute (interaction) {
    let intiharsebep = interaction.options.getString('sebep');
  const narcosembed = new MessageEmbed()
      .setColor("RED")
      .setTitle('İNTİHAR VAKASI!')
      .setDescription(`${interaction.user.username} │ Adlı Kullanıcı **${intiharsebep}** Yüzünden İntihar Etti! `)
      .setImage("https://cdn.discordapp.com/attachments/825828537863897109/830546635485347840/tumblr_nedlrnx6wE1tlc35wo1_500.gif" )
    
      interaction.reply({embeds:[narcosembed]});
    
    
  }
}