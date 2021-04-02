const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`

:pushpin: \`.invite\`
***Davetlerinizi Görürsünüz***

:pushpin: \`.top\`
***En Çok İnvite Yapan 10 Kişiyi Sıralar***

:pushpin: \`.davet-kanal\`
***(Sadece Yöneticiler Kullanabilir) İnvite Kanalı Ayarlarsınız***

:pushpin: \`.davet\`
***Botumuzun Davet Menüsü***

**Şuanlık Komutlarımız Bunlardır **

:round_pushpin: \`Yapımcım\`
<@701831314533384263>'Aittir
`)
.setImage(``) // gif koyun koymıyacaksanız silerbilirsiniz.
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "yardım"
}