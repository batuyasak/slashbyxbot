const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('zarat')
    .setDescription('Zar atarsın.'),
  async execute (interaction) {
    interaction.reply({embeds:[
        new MessageEmbed()
        .setColor("#292929")
        .setTitle('🎲 Zarın: ' + narcoscode())]});
        
        function narcoscode() {
            var rand = ['1', '2', '3', '4', '5', '6'];
        
            return rand[Math.floor(Math.random()*rand.length)];
        }
  }
}