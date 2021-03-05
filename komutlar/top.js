const Discord = require("discord.js");
const Database = require("../Helpers/Database");

exports.run = async (client, message, args) => {
  let kanal = "808850097608851470";

  if (message.channel.id !== kanal) return message.react("809011050527719474");

  if (
    !message.member.roles.cache.get("809111646320590869") &
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.react("809011050527719474");

  const db = new Database("./Servers/" + message.guild.id, "Invites");
  var data = db.get(`invites`) || {};

  var list = Object.keys(data)
    .map(_data => {
      return {
        Id: _data,
        Value: (data[_data].total || 0) + (data[_data].bonus || 0)
      };
    })
    .sort((x, y) => y.Value - x.Value);

  var embed = new Discord.MessageEmbed().setColor("BLUE").addField(
    "En Çok Davet Kasan İlk 5 Kişi",
    `** **${list
      .splice(0, 5)
      .map(
        (item, index) =>
          `\`${index + 1}.\` <@${item.Id}>: \`${item.Value} Davet\``
      )
      .join("\n")}`
  );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["top"],
  permLevel: 0
};
exports.help = {
  name: "top10",
  description: "Sunucuda en çok davet yapmış 10 kişiyi sıralar",
  usage: "top10"
};
