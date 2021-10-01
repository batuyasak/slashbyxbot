const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton,Permissions } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ilginçbilgi')
    .setDescription('İlgin bir bilgi öğrenirsin.'),
  async execute (interaction) {
    var ilgincsöz = [
        "Kaju Olarak Bildiğimiz Çerez, Aslında Kaju Meyvesinin Sapıdır!",
        "Ananas Aslında Meyve Değildir ama Tarlada Meyve Şekilde Büyür!",
        "Su Aygırlarının Sütü Pembe Renklidir!",
        "Mavi Balinaların Kalbi o Kadar Büyüktür ki Bir İnsanın Atardamarları İçinde Rahatlıkla Yüzebilir!",
        "Kuzey Kore ile Finlandiya'yı Ayıran Tek Ülke Rusya'dır!",
        "'Duck Hunt' Aslında iki Kişilik bir Oyundur, İkinci Oyuncu Ördeği Kontrol Eder!",
        "Plüton Keşfedildiği Tarihten İtibaren bir Kez Bile Güneşin Etrafında Tam Tur Dönmemiştir! Bu Yüzden Artık Bir Gezegen Olarak Kabul Edilmiyor!",
        "Bal Güneş Görmediği Sürece Asla Bozulmaz!",
        "Super Mario Aslında Blokları Eliyle Kırar, Kafasıyla Değil!",
        "19. Yüzyıldaki Tüm İnsanlar, Şuan 2 Dakikada Çekilen Fotoğraflar Kadar Fotoğraf Çekmemişlerdir!",
        "Yer Fıstığı Aslında Bir Baklagildir ve Toprağın Altında Büyür!",
        "Her 5000 Bebekten Birisi Anüsü Olmadan (Imperforate Anus) Doğuyor ve Hastane Ortamında Anüs Yapılması Gerekiyor!",
        "Gökyüzündeki Yıldız Sayısı Dünya Üzerindeki Tüm Plajlardaki Kum Tanesi Sayısından Fazladır!",
        "Bin Saniye Yaklaşık 16 Dakika, Bir Milyon Saniye Yaklaşık 11 Gün, Bir Milyar Saniye Yaklaşık 32 Yıl ve Bir Trilyon Saniye Yaklaşık 32.000 Yıl Eder!",
        "İnsan DNA'sı %50 Oranında Muz DNA'sı ile Aynıdır!",
        "İlk 'Star Wars' Filmi Yayınlandığında (25 Mayıs 1977) Fransa'da Hala Giyotin ile İdam Yasaldı! Giyotin, Bir Tür Kafa Kesme İdam Türüdür!",
        "Rusya, Pluto'dan Daha Büyük bir Yüzölçümüne Sahiptir!",
        "Ahtapotların 3 Tane Kalbi Vardır!",
        "Fareler ve Atlar Kusamaz!",
        "Belçika Yasalarına Göre; Her İlkokul Öğrencisinin Mızıka Dersi Alması Zorunludur!",
        "Soğan Doğrarken Sakız Çiğnemek Ağlamaya Büyük Bir Oranla Engel Olur!",
        "İnsanoğlunun Vücudundaki En Güçlü Kas, Çene Kasıdır!",
        "Okyanusun En Derin Yerinde, Demir Bir Topun Dibe Çökmesi Bir Saatten Uzun Sürer!",
        "Bugüne Kadar Ölçülmüş En Büyük Buz Dağı, 200 Mil(KM) Uzunluğunda ve 60 Mil(KM) Genişliğindedir Ayrıca Belçika'dan Daha Büyük bir Yüzölçümüne Sahiptir!",
        "İnsanın Gözü Tam Olarak 576 Megapikseldir!",
        "Işık Saniyede 300.000 Km Yol Alır!",
        "Su Samurları El Ele Tutuşarak Uyurlar!",
        "Dünyanın En Uzun Süren Trafik Sıkışıklığı 12 Gündür, 100 KM Uzunluğunda Kuyruk Oluşmuştur Araçlar Günde Yaklaşık 1 KM İlerleye Bilmişlerdir!",
        "Taklitçi Ahtapot İsimli Ahtapot, Sadece Renk Değiştirmekle Kalmıyor, Aynı Zamanda Dil Balığı, Aslan Balığı ve Deniz Yılanı Gibi Hayvanların Şekline de Bürünebiliyor!",
        "Araştırmalara Göre Kadın Jinsel Organizmalarına Dokunmak Erkeklerde Stresi %70 Oranında Azaltıyor!"
      ];
      var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)];
      const narcosembed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`İlginç Bilgi`)
        .setFooter(`\n${interaction.user.username} Yeni Birşey Öğrendi!`,interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(`${ilgincsöz}`);
      return interaction.reply({embeds:[narcosembed]});
  }
}