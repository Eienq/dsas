const Discord = require("discord.js");

exports.run = (client, message) => {
  let prex = new Discord.MessageEmbed()
    .addField(
      "``Veriler``",
      ` :pushpin: \`Toplam sunucu:\` **${client.guilds.cache.size}** \n :pushpin: \`Toplam kullanıcı:\` **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n :pushpin: \`Toplam kanal:\`  **${client.channels.cache.size}**`)
    .addField(
      "``Bot Geliştiricisi``",
      ` :pushpin: <@701831314533384263> `)
    .addField(
      "``Sürümler``",
      ` :pushpin: \`Discord.js sürümü:\` **v${Discord.version}** \n :pushpin: \`Node.js sürümü:\` **${process.version}**`)
    .addField(
      "``Gecikmeler``",`
     :pushpin: \`Bot pingi:\` **${client.ws.ping}** 
     :pushpin: \`Mesaj gecikmesi:\` **${new Date().getTime() - message.createdTimestamp}**`)
	
	.addField(`<a:kelebk:797036626786254868>  Ewerx İnvite Bot Bağlantıları`,
	`<a:maviinstagram:783776357829181490> ** [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=823971558753566774&scope=bot&permissions=0) **|** [Destek Sunucusu](https://discord.gg/fsqnmYrcB8) |** `) //websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
     .setImage(`https://cdn.discordapp.com/attachments/789815101963108412/823997970004312114/350kb.gif`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setColor("BLACK");
  message.channel.send(prex);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["stat", "i","istatistik "]
};

exports.help = {
  name: "istatistik",
  description: "Botun İstatistiklerini Atar",
  usage: "!istatistik"
};