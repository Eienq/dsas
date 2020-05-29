const { discord, MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'otorol-mesaj',
  description: 'deneme',
  run: async(client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın ! `);

if (args[0] === 'sıfırla') {
    const embed = new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Otorol`)
.setColor('BLACK')
.setDescription(`Otorol Mesajı Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(embed)
db.delete(`otorolmesaj_${message.guild.id}`)
return;
}

let mesaj = args.slice(0).join(' ')
if (!mesaj) return message.channel.send(`Lütfen Bir Mesaj belirtiniz ! Örnek \`-otorol-mesaj **-sunucu-** Adlı Sunucumuza -uye- Adlı Kullanıcı Katıldı . Otomatik Olarak -rol- Verildi ! \`  `)

const embed = new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Otorol`)
.setColor('BLACK')
.setDescription(`Otorol Mesajı Başarıyla \`${mesaj}\` Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(embed)
db.set(`otorolmesaj_${message.guild.id}`, mesaj)
}
}