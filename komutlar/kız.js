const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
if(message.channel.id !== 'KAYIT KANAL İD') //Kayıt Kanal İd
  return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:basarisiz:757851005483221022> Bu Komudu Sadece \`║kayıt-chat\` Adlı Kanalda Kullanabilirsin ! `))

  
  let yetkiyok = new Discord.MessageEmbed()
 .setDescription('<a:basarisiz:757851005483221022> **Bu komudu kullanabilmek için** <@&YETKİLİ ROL İD> **yetkisine sahip olmalısın!**')
 .setColor('RED')
 
if (!message.member.roles.cache.get("YETKİLİ ROL İD"))//Yetkili Rol İd
  return message.channel.send(yetkiyok) 

let member = message.mentions.members.first();
  if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`<a:basarisiz:757851005483221022>  Erkek Olarak Kaydedeceğin Kullanıcıyı Belirtmelisin ! `))


   member.roles.remove('KAYITSIZ ROL İD') //Kayıt Edince Alınacak Rol
   member.roles.add('1. KIZ ROL İD') //Kayıt Edince Verilecek Rol1
   member.roles.add('2. KIZ ROL İD') //Kayıt Edince Verilecek Rol2https://cache.gametracker.com/server_info/185.193.165.235:27015/b_560_95_1.png

  
const kayıtsohbet = new Discord.MessageEmbed()
  .setDescription(`<a:basarili:757851040346538084> ${member.user} adlı üyenin <@&KAYITSIZ ROL İD> rolünü alıp <@&1. KIZ ROL İD>, <@&2. KIZ ROL İD>  rollerini verdim. \n <a:sagok:757855573554233396> Toplam Kayıt Sayın: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  .setColor('#b2fae6')
db.add(`kayıtsayı_${message.author.id}`, 1)
message.channels.send(kayıtsohbet)
  
const genelsohbet = new Discord.MessageEmbed()
   .setDescription(`<a:welcome:755812679037485127> ${member.user} adlı üye sunucumuza kayıt oldu. Aramıza Hoşgeldin :) `)  .setColor('#0e3bfa')
client.channels.cache.get('GENEL SOHBET İD').send(genelsohbet)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['k'],
permLevel: 0
};
exports.help = {
name: "kız",
description: "kız Kayıt",
usage: "prefix!kız @üye"
};