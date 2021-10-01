const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('balıktut')
    .setDescription('Balık tutarsın.'),
  async execute (interaction) {

    interaction.reply({embeds:[
      new MessageEmbed()
    .setDescription("Balık Tuttun Balığı Çekiyorsun..")
  ]}).then(message => {
        var espriler = [
          "Sazan Tuttun! :fish:",
          "Köpek Balığı Tuttun İyi Para Eder Sat Sat :D",
          "Uskumru Tuttun! :fish:",
          "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
          "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?",
          "Hamsi Tuttun! :fish:",
          "Levrek Tuttun! :fish:",
          "Hiçbirşey Tutamadın Maalesef! :wastebasket:",
          "Alabalık Tuttun! :fish:",
          "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
          "İstavrit Tuttun! :fish:",
          "Gümüş Balığı Tuttun! :wastebasket:",
          "Çukra Tuttun!:fish:",
          "Balon Balığı Tuttun, İğneye Dikkat!",
          "Yılan Balığı Tuttun, Allah Çarpıldık!"
        ];
        var espri = espriler[Math.floor(Math.random() * espriler.length)];
        interaction.editReply({embeds:[
          new MessageEmbed()
        .setDescription(`${espri}`)
      ]});
  })
}
  }