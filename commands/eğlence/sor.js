const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('sor')
    .setDescription('Bota soru sorarsın.')
    .addStringOption(option => 
        option.setName('soru')
        .setDescription('Bir soru sor.')
        .setRequired(true)),
  async execute (interaction) {
    const cevaplar = [                  
    'Bu kesin.',
    'Kesinlikle öyle.',
    'Kuşkusuz.',
    'Evet, Kesinlikle.',
    'Birşey merak ettim, bundan sanane?',
    'Buna güvenebilirsin.',
    'Gördüğüm kadarıyla, Evet.',
    'Büyük olasılıkla.',
    'Görünüşe göre, iyi.',
    'çok ilginç bi soru düşünmem lazım dostum...',
    'İşaretler eveti gösteriyor.',
    'Anlayamadım, tekrar edin.',
    'Daha sonra sor.',
    'Şimdi söylemesen iyi olur.',
    'Tahmin edemiyorum...',
    'Konsantre ol ve tekrar sor.',
    'Buna güvenme.',
    'Cevabım, hayır.',
    'Kaynaklarım hayır diyor.',
    'Görünüşe göre, bu iyi değil.',
    'Çok şüpheli.',
    'Şüpheli.',
    'Büyük olasılıkla, hayır.',
    'İçgüdüm, hayır diyor.',
    'Kararsız kaldım, bidaha sormaya ne dersin?'               
];                    
var soru = interaction.options.getString('soru');

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if(!soru) return interaction.reply("Bana bir soru sormalısın! **Örnek**: /sor <soru>")
else interaction.reply(cevap)

  }
}