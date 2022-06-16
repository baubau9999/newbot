const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    category: "Moderation",
    description: "Mutes A User.",
    usage: "[command]+ [User]",
    aliases: ["mute"],

    run : async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`Insufficient permission!!`);
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send(`I dont have permissions to mute`);
        const Member = message.mentions.members.last() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send('Tag 1 thằng ngu!')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Không tìm thấy vai trò bị ẩn, đang cố gắng tạo vai trò bị ẩn.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        color: "RED",
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Đã tạo thành công vai trò ẩn.')
            } catch (error) {
                console.log(error)
                message.channel.send(error)
            }
        }
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} đã bị cấm chat.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} Đã Bị Tắt Tiếng.`)
      
    }
}