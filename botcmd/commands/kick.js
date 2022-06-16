const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "MOD",
    description: "kick",
    usage: "[command]+[reason]+[user]",
    aliases: ["kick", "ditmemay"],

    run: async(client, message, args) => {
        const member = message.mentions.members.first()
        const reason = args.slice(1).join(" ")

        if(!message.member.hasPermission('BAN_MEMBERS')) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`Bạn Đéo Có Quyền!`)
            .setColor(`RANDOM`)
            message.channel.send(no)
        } else {
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
                    const no2 = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`Tôi không có quyền cấm!`)
                    .setColor(`RANDOM`)
                    message.channel.send(no2)
            } else {

            if(!member) {
                const members = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`Tag một thằng mày muốn kick!`)
                .setColor(`RANDOM`)
                message.channel.send(members)
            } else {
                if(!reason) {
                    const reason = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(`Lý Do Kick!`)
                    .setColor(`RANDOM`)
                    message.channel.send(reason)
                } else {
                    if(member.bannable) {
                        member.ban({reason: reason})
                        const done = new MessageEmbed()
                        .setTitle('Success!')
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`Banned ${member} for ${reason}.`)
                        .setFooter(`Requested by: ${message.author.username}`)
                        .setColor(`RANDOM`)
                        message.channel.send(done)
                    } else {
                        const cant = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("Người dùng đó là một mod/admin, tôi không thể làm điều đó. ")
                        .setColor(`RANDOM`)
                        message.channel.send(cant)
                    }
                }
            }
        }

    }
   }
}