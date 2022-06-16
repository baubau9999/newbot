const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: "Unmutes A User",
    usage: "[command]+ [User]",
    aliases: ["unmute",],
    run : async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`Đéo Có Quyền!!`);
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(`Tôi không có quyền bật tiếng`);
        const Member = message.mentions.members.last() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Hãy Tag Thằng Ngu Đó!')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} Mày Đã Có Thể Chat`)
    }
}