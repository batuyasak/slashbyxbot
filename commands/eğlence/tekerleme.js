const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tekerleme')
    .setDescription('Tekerleme Söyler.'),
  async execute (interaction) {
    var box = [
        "Götür küpü, dök küpü. Getir küpü dök küpü",
        "GüI dibi, büIbüI diIi gibi",
        "Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
        "FaIcı, faIcının faIına, fasa fiso dedi.",
        "O pikap, şu pikap, bu pikap.",
        "Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
        "Keşkekçinin keşkekIenmiş keşkek kepçesi.",
        "Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
        "ÇataIcada topaI çoban çataI yapıp çataI satar, nesi için çataIcada topaI çoban çataI yapıp çataI satar?",
        "Dört deryanın deresini dört dergâhın derbendine devrederIerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
        "Sen seni biI, sen seni, biI sen seni, biI sen seni, sen seni biImezsen patIatırIar enseni."
        ]
        const CrewCode = box[Math.floor(Math.random() * box.length)];
         
        interaction({embeds:[
        new MessageEmbed()
        .setTitle("Tekerleme")
        .setDescription(CrewCode)
        ]})
  }
}