const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "Utility",
    description: "Shows info about a server",
    timeout: 10000,
    usage: "[command]",
      aliases: ["svi"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setTitle(`${message.guild.name} Server stats`)
            .addFields(
                {
                    name: "🔰 Chủ Sở Hữu: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "👥 Members: ",
                    value: `Có ${message.guild.memberCount} Thành Viên!`,
                    inline: true
                },
                {
                    name: "🎈 Ngày Tạo Server: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "✨ Số Lượng Role: ",
                    value: `Có ${message.guild.roles.cache.size} roles trong server.`,
                    inline: true,
                },
                {
                    name: "✅ Verified Server: ",
                    value: message.guild.verified ? 'Máy Chủ Đã Verified' : `Máy Chủ Chưa Verified`,
                    inline: true
                },
                {
                    name: "🗺 Khu Vực Máy Chủ: ",
                    value: message.guild.region,
                    inline: true
                },
                {
                    name: "✈ Boosters: ",
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Có ${message.guild.premiumSubscriptionCount} Boosters` : `Không Có Boosters`,
                    inline: true
                },
                {
                    name: "😀 Emojis: ",
                    value: message.guild.emojis.cache.size,
                    inline: true
                },
                {
                    name: "🎇 Animated Emoji: ",
                    value: message.guild.emojis.cache.filter(emoji => emoji.animated).size,
                    inline: true
                },
                {
                    name: "👨‍💼 Tổng số vai trò: ",
                    value: message.guild.roles.cache.size,
                    inline: true
                },
                {
                    name: "💬 Tổng số kênh văn bản: ",
                    value: message.guild.channels.cache.filter(channel => channel.type === 'text').size,
                    inline: true
                },
                {
                    name: "🎤 Tổng số kênh thoại: ",
                    value: message.guild.channels.cache.filter(channel => channel.type === 'voice').size,
                    inline: true
                }
            )       
            await message.channel.send(embed)
    }
}