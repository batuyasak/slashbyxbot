const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('sunucuresmi')
    .setDescription('Sunucunun resmini gösterir.'),
  async execute (interaction) {
    let links;
    if(interaction.guild.icon){
    links = interaction.guild.iconURL({ dynamic: true, size: 4096, format: 'png' })
    } else {
    links = "https://cdn.discordapp.com/attachments/437565714107203585/878702712240357406/standard_3.gif"
    }
           let buton; 
    if(interaction.guild.icon){
    buton = false
    } else {
    buton = true
    }
     const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL(links)
                        .setLabel('SunucuResim URL')
                        .setStyle('LINK')
                       .setDisabled(buton),
                );
         let embed;
    if(interaction.guild.icon){
    embed = interaction.guild.iconURL({ dynamic: true, size: 4096, format: 'png' })
    } else {
    embed = "https://cdn.discordapp.com/attachments/437565714107203585/878702712240357406/standard_3.gif"
    }
          const CrewCodeembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${interaction.guild.name} Adlı Sunucunun Resmi`)
      .setImage(embed)
      interaction.reply({embeds:[CrewCodeembed], components: [row]})
  }}