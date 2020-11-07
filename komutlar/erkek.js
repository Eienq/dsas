const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
if(message.channel.id !== '774349626081148958') return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:basarisiz:757851005483221022> Bu Komudu Sadece \`register-chat\` Adlı Kanalda Kullanabilirsin ! `))

  
 let hata = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&774353380611981312> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("774353380611981312")) return message.channel.send(hata) 

let member = message.mentions.members.first();
  if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022>  Erkek Olarak Kaydedeceğin Kullanıcıyı Belirtmelisin ! `))


member.roles.remove('774353422316601394') //Kayıt Edince Alınacak Rol
member.roles.add('774353423155331102') //Kayıt Edince Verilecek Rol
  member.roles.add('774576814798405633') //Kayıt Edince Verilecek Rol
  
const embed = new Discord.MessageEmbed()
.setDescription(`<a:basarili:757851040346538084> ${member.user} adlı üyenin <@&774353422316601394> rolünü alıp <@&774353423155331102>, <@&774576814798405633>  rollerini verdim. \n <a:sagok:757855573554233396> Toplam Kayıt Sayın: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)

.setColor('BLUE')
db.add(`kayıtsayı_${message.author.id}`, 1)

client.channels.cache.get('774349626081148958').send(embed)
  
  const embed2 = new Discord.MessageEmbed()
.setDescription(`<a:welcome:755812679037485127> ${member.user} adlı üye sunucumuza kayıt oldu. Aramıza Hoşgeldin :) `)  .setColor('BLUE')
client.channels.cache.get('774349649946476571').send(embed2)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['e'],
permLevel: 0
};
exports.help = {
name: "erkek",
description: "Erkek Kayıt",
usage: "prefix!erkek"
};