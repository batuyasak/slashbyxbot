const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('izle')
    .setDescription('youtube izlersiniz.')
    .addSubcommand(subcommand => 
        subcommand
         .setName("yt")
         .setDescription("youtube izlersiniz.")
        ),
    async execute (interaction) {
if(!interaction.member.voice.channel) return interaction.reply({embeds:[new MessageEmbed()
  .setDescription(`Ses Kanalında Değilsiniz!!`)
  .setColor("RED")
  ]})
  
if(interaction.options.getSubcommand() === "yt") {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${interaction.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${interaction.client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("**YOUTUBE**")
                    embed.setDescription(`**__Youtube'dan Video İzlemek İçin Butona Basınız..__**`)
                    embed.setColor('RED')
                   embed.setFooter(`${interaction.user.tag} istedi!`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
                       
  
   const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL(`https://discord.gg/${invite.code}`)
					.setLabel('Youtube')
					.setStyle('LINK'),
			);
            interaction.reply({embeds:[embed], components: [row]})
                })
  
}
    }
}
