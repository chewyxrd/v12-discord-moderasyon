const Discord = require("discord.js");

exports.run = (client, message, args) => {

  if(!message.member.roles.cache.has("928022524766330942") && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "Bu komutu kullanmak için yeterli yetkiniz bulunmamakta!"
    );
  let chewylink = args[0];
  let emojiisim = args[1];
  let guild = message.guild;
  if (!chewylink)
    return message.channel.send("Emojinin alınacağı linki girmelisin!");
  if (!emojiisim) return message.channel.send("Emojinin ismini belirtmelisin!");

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Emoji Eklendi!", message.guild.iconURL)
    .setDescription(` **${emojiisim}** İsmiyle yeni bir emoji oluşturuldu!`)
    .setFooter(`Developed by Chewy`);

  guild
    .emojis.create(`${chewylink}`, `${emojiisim}`)
    .then(emoji => message.channel.send(embed));
  message.react("✅").catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addemoji", "emojioluştur", "ee"],
  permLevel: 0
};
exports.help = {
  name: "emojiekle",
  description: "Sunucuya emoji eklersiniz.",
  usage: "emojiekle <link> <isim>"
};
