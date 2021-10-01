const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js');
const db = require('croxydb')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('abone')
    .setDescription('Abone olan birine rol verirsin.')
    .addUserOption(option =>
        option.setName('kişi')
          .setDescription('bir kişi belirt')
          .setRequired(true)),
  async execute (interaction) {
    if(!interaction.member.roles.cache.has(db.fetch(`aboneyetkili_${interaction.guild.id}`))) {
        return interaction.reply("Bu Komutu sadece abone yetkilisi kullanabilir!");
      }
let log = db.fetch(`abonelog_${interaction.guild.id}`)
if(!log) return interaction.reply('Abone log kanalı ayarlanmamış')
let rol = db.fetch(`abonerol_${interaction.guild.id}`)
if(!rol) return interaction.reply('Abone rolü ayarlanmamış')
let kişi = interaction.options.getMember('kişi')
kişi.roles.add(rol)
const embedd = new MessageEmbed()
.setTitle(`Abone işlemi`)
.setDescription(`<@${interaction.user.id}> adlı yetkili <@${kişi.id}> adlı kişiye abone rolü verdi!`)
interaction.guild.channels.cache.get(log).send({embeds:[embedd]})
  }
}