const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('yumrukat')
    .setDescription('Birine yumruk atarsın.')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true)),
  async execute (interaction) {
    let replies = ["https://media1.giphy.com/media/26AHxQqwx7ZN0fcje/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let member = interaction.options.getMember('kişi');
 
     let gifembed = new MessageEmbed()
         .setDescription(`${interaction.user} Tarafından ${member}'a Yumruk Atıldı!`)
         .setColor("#FF69B4")
         .setFooter(`ByX Bot`, interaction.client.user.displayAvatarURL({dynamic: true, format: "png"}))
         .setImage(replies[result]);
 
         interaction.reply({embeds:[gifembed]});
  }}