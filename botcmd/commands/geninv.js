const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`900483722577588224`)) return  message.reply('**CHỈ CHỦ SỞ HỮU CỦA TÔI CÓ THỂ SỬ DỤNG LỆNH NÀY!**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Premium Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [here]()**\n\n**Note: _Only my owner can invite me!_**`)
  .setColor(`#0x2F3136`));
	}
};
