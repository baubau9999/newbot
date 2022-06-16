const { MessageButton, MessageActionRow } = require('discord-buttons');
const sourcebin = require('sourcebin_js');
const Discord = require ('discord.js')
const ee = require("../../botconfig/embed.json");
const disbut = require("discord-buttons");

module.exports = async function(client, button) {
        try {
            await button.reply.defer();
            if (button.id == 'createTicket') {
                var adminRole = require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`)
                var nameer = `ticket-${button.clicker.user.username}`
                var checkTickets = button.guild.channels.cache.find(c => c.name == nameer.split(' ').join('-').toLocaleLowerCase());
                if (checkTickets) {
                    button.channel.send({
                        embed: {
                            color: 0xFF0000,
                            setFooter: `ee.footertext, ee.footericon`,
                            title: `**❌ | Error**`,
                            description: `You already have a ticket open before`
                        }
                    }).then(async function(m) {
                        setTimeout(() => {
                            m.delete();
                        }, 1000 * 7);
                    });
                    return
                }
                
        button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🔒")

.setLabel("")
                      .setID("configTicket");
                      let btn2 = new MessageButton()
                        .setStyle("green")
                        .setEmoji("💵")

.setLabel("")
.setID("claimTicketin");
                        let btn3 = new MessageButton()
                        .setStyle("blurple")
                        .setEmoji("888350726877769728")

.setLabel("")
                      .setID("otherTicketin");
                      let btn4 = new MessageButton()
                        .setStyle("red")
                        .setEmoji("📌")

.setLabel("")
                      .setID("pin");
                      let btn5 = new MessageButton()
                        .setStyle("blurple")
                        .setEmoji("📝")

.setLabel("")
                      .setID("trans");
                    let row = new MessageActionRow()
                        .addComponent(btn)
                        .addComponent(btn5)
                    channel.send(`<@${button.clicker.user.id}> :arrow_forward: <@&${adminRole}> :arrow_backward:`, {
                        embed: {
                            description: `Sẽ Có Người Hỗ Trợ Bạn Ngay Thôi Đợi Một Chút :3`,
                            color: 0x2F3136
                        },
                        
                        component: row
                        }).then(msg => {
              msg.pin();
                    });
                });
                 } else if (button.id == 'otherTicket') {
                var adminRole = require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`)
                var nameer = `ticket-${button.clicker.user.username}`
                var checkTickets = button.guild.channels.cache.find(c => c.name == nameer.split(' ').join('-').toLocaleLowerCase());
                if (checkTickets) {
                    button.channel.send({
                        embed: {
                            color: 0xFF0000,
                            footer: 'ee.footertext, ee.footericon',
                            title: `**❌ | Error**`,
                            description: `Bạn Đã Có Ticket Cũ`
                        }
                    }).then(async function(m) {
                        setTimeout(() => {
                            m.delete();
                        }, 1000 * 7);
                    });
                    return
                }
                
        button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🔒")

                        .setLabel("")
                      .setID("configTicket");
                      let btn2 = new MessageButton()
                        .setStyle("green")
                        .setEmoji("💵")

                        .setLabel("")
                        .setID("claimTicketin");
                        let btn3 = new MessageButton()
                        .setStyle("blurple")
                        .setEmoji("888350726877769728")

                          .setLabel("")
                      .setID("otherTicketin2");
                      let btn4 = new MessageButton()
                        .setStyle("red")
                        .setEmoji("📌")

                      .setLabel("")
                      .setID("pin");
                    let btn5 = new MessageButton()
                        .setStyle("blurple")
                        .setEmoji("📝")

                      .setLabel("")
                      .setID("trans");
                    let row = new MessageActionRow()
                        .addComponent(btn)
                        .addComponent(btn5)
                    channel.send(`<@${button.clicker.user.id}> <:hydroxdot:888039412632543263> <:hydroxarrow:888018627880714241> <@&${adminRole}> <:hydroxarrow_left:888351028787961866>`, {
                        embed: {
                          footer: 'ee.footertext, ee.footericon',
                            description: `Chờ một chút sẽ có suport tư vấn cho bạn 🍁`,
                            color: ff0000
                        },
                        component: row
                        }).then(msg => {
              msg.pin();
                    });
                });
                 } else if (button.id == 'claimTicket') {
                var adminRole = require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`)
                var nameer = `ticket-${button.clicker.user.username}`
                var checkTickets = button.guild.channels.cache.find(c => c.name == nameer.split(' ').join('-').toLocaleLowerCase());
                if (checkTickets) {
                    button.channel.send({
                        embed: {
                            color: 0xFF0000,
                            footer: 'ee.footertext, ee.footericon',
                            title: `**❌ | Error**`,
                            description: `You already have a ticket open before`
                        }
                    }).then(async function(m) {
                        setTimeout(() => {
                            m.delete();
                        }, 1000 * 7);
                    });
                    return
                }
                
        button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🔒")
.setLabel("")
                      .setID("configTicket");
                      let btn2 = new MessageButton()
                        .setStyle("green")
                        .setEmoji("💵")


.setLabel("")
                      .setID("pin");
                    let btn5 = new MessageButton()
                        .setStyle("blurple")
                        .setEmoji("📝")

.setLabel("")
                      .setID("trans");
                    let row = new MessageActionRow()
                        .addComponent(btn)
                   //     .addComponent(btn2)
                   //     .addComponent(btn3)
                  //      .addComponent(btn4)
                        .addComponent(btn5)
                        
                    channel.send(`<@${button.clicker.user.id}> <:hydroxdot:888039412632543263> <:hydroxarrow:888018627880714241> <@&${adminRole}> <:hydroxarrow_left:888351028787961866>`, {
                        embed: {
                          footer: 'ee.footertext, ee.footericon',
                            description: `Please wait for an Admin to respond!!\n\n__**Please Tell Us What You Need Help On!**__\n\n**<:hydroxreply:887741912180727849>Ticket Category: Claim**\n
                    Press **🔒** to close this ticket`,
                            color: 0x2F3136
                        },
                    

                        component: row
                        }).then(msg => {
              msg.pin();
                    });
                    
                });
            } else if (button.id == 'configTicket') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        deny: ['SEND_MESSAGES'],
                        allow: ['VIEW_CHANNEL']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.channel.send({
                    embed: {
                        description: `Ticket Được Đóng Bởi **__${button.clicker.user.tag}__**`,
                        color: 0xFFE700
                    }
                }).then(async function(m) {
                    setTimeout(() => {
                        m.delete();
                    }, 1000 * 5);
                });
                let btn = new MessageButton()
                    .setStyle("red")
                    .setEmoji("887650892852125746")
                    .setLabel("Không")
                    .setID("reopenTicket");
                let btn2 = new MessageButton()
                    .setLabel('Có')
      .setStyle('green')
      .setID('pin-close')
      .setEmoji('887650847327158343')
                let row = new MessageActionRow()
                    .addComponent(btn2)
                    .addComponent(btn);
                button.channel.send(`<@${button.clicker.id}>`, {
                    embed: {
                       setFooter: 'ee.footertext, ee.footericon',
                        description: '```Bạn có muốn đóng Ticket?```',
                        color: 0xFFE700
                    },
                    component: row
                })
                
                	 } else if (button.id == "trans") {
				button.channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${button.channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return button.channel.send('Đã lỗi vui lòng thử lại sau!');
					}

					const embed = new Discord.MessageEmbed()
						.setDescription(`[\`\`\`📄 Xem lại lịch sử ticket của ${button.channel.name}\`\`\`](${response.url})`)
						.setColor('GREEN');
					button.channel.send(`<@${button.clicker.id}>`, embed);
				});
            } else if (button.id == "reopenTicket") {
                button.channel.send({
                    embed: {
                        description: `\`\`\`Đã Hủy Đóng Ticket!\ by ${button.clicker.user.tag}\`\`\``,
                        color: 0xFFE700
                    }
                })
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                } else if (button.id == "pin-close") {
                require('quick.db').delete(`TicketControl_${button.channel.id}`);
                button.message.reply({
                    embed: {
                        description: `\`\`\`Ticket Đang Xóa\n\nAction By: ${button.clicker.user.tag}\`\`\``,
                        color: 0xFF0000
                    }
                });
                 setTimeout(() => {
                    button.channel.delete();
                }, 1000 * 4.3);
            } else if (button.id == 'closeTicketTrue') {
                require('quick.db').delete(`TicketControl_${button.channel.id}`);
                button.channel.send({
                    embed: {
                        description: 'Ticket sẽ được xóa sau 5s',
                        color: 0xFF0000
                    }
                });
                setTimeout(() => {
                    button.channel.delete();
                }, 1000 * 4.3);
            } else if (button.id == 'closeTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteMessage_${button.channel.id}`);
                
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteMessage_${button.channel.id}`);
            } else if (button.id == 'createTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteOpen_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteOpen_${button.channel.id}`);
            } else if (button.id == 'createTicketTrue') {
                var msg = require('quick.db').fetch(`DeleteOpen_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteOpen_${button.channel.id}`);
                button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
                    permissionOverwrites: [{
                            id: button.clicker.user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        },
                        {
                            id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                        }, {
                            id: button.guild.roles.everyone,
                            deny: ["VIEW_CHANNEL"]
                        }
                    ],
                    type: 'text'
                }).then(async function(channel) {
                    require('quick.db').set(`TicketControl_${channel.id}`, button.clicker.user.id);
                    let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🔒")
                        .setID("configTicket");
                    let row = new MessageActionRow()
                        .addComponent(btn);
                    channel.send(`<@${button.clicker.user.id}>`, {
                        embed: {
                            description: `Please wait for a **ADMIN** response!!
                    Press **"🔒"** to close this ticket`,
                            color: 0x2F3136
                        },
                        component: row
                    });
                });
                } else if (button.id == 'claimTicketin') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.message.edit({
                    embed: {

                        description: `Please wait for an Admin to respond!!\n\n__**Please Tell Us What You Wish to claim!**__\n\n**<:hydroxreply:887741912180727849>Ticket Category: Claim**\nEdited by: __**${button.clicker.user.tag}**__\n
                    Press **🔒** to close this ticket`,
                        color: 0x2F3136
                    }
                })
                } else if (button.id == 'claimTicketin2') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.message.edit({
                    embed: {
                        description: `Please wait for an Admin to respond!!\n\n__**Please Tell Us What You Wish To Claim!**__\n\n**<:hydroxreply:887741912180727849>Ticket Category: Claim**\nReverted by: __**${button.clicker.user.tag}**__\n
                    Press **🔒** to close this ticket`,
                        color: 0x2F3136
                    }
                })
                 } else if (button.id == 'otherTicketin') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.message.edit({
                    embed: {
                        description: `Please wait for an Admin to respond!!\n\n__**Please Tell Us What You Need Help On!**__\n\n**<:hydroxreply:887741912180727849>Ticket Category: Other**\nEdited by: __**${button.clicker.user.tag}**__\n
                    Press **🔒** to close this ticket`,
                        color: 0x2F3136
                    }
                })
                } else if (button.id == 'otherTicketin2') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                button.message.edit({
                    embed: {
                        description: `Vui lòng đợi Quản trị viên
 respond!!\n\n__**Please Tell Us What You Need!**__\n\n**<:hydroxreply:887741912180727849>Ticket Category: Other**\nReverted by: __**${button.clicker.user.tag}**__\n
                    Press **🔒** to close this ticket`,
                        color: 0x2F3136
                    }
                })
                } else if (button.id == 'pin') {
                if (!button.channel.name.includes("ticket-")) {
                    return;
                }
                var member = require('quick.db').fetch(`TicketControl_${button.channel.id}`);
                button.channel.overwritePermissions([{
                        id: member,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: require('quick.db').fetch(`TicketAdminRole_${button.guild.id}`),
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    }, {
                        id: button.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ]);
                 button.channel.setName(`📌-pinned-ticket`)
                 let btn = new MessageButton()
                        .setStyle("grey")
                        .setEmoji("🗑️")

.setLabel("Force Close")
                      .setID("pin-close");
                      let row = new MessageActionRow()
                        .addComponent(btn);
                button.channel.send({
                    embed: {
                        description: `\`\`\`Tôi đã ghim vé này
!\nGhim by: ${button.clicker.user.tag}\nPress **🗑️** tbuộc đóng vé đã ghim này
.\`\`\``,
                        color: 0x2F3136
                    },
                    component: row
                    
                })
            } else if (button.id == 'renameTicketFalse') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
            } else if (button.id == 'renameTicketTrue') {
                var msg = require('quick.db').fetch(`DeleteRenameMessage_${button.channel.id}`);
                button.channel.messages.fetch(msg).then(message => message.delete()).catch(err => { return });
                button.channel.setName('ticket-' + require('quick.db').fetch(`RenameTicket_${button.channel.id}`));
                button.channel.send({
                            embed: {
                                title: '✅',
                                description: `Ticket đã đổi tên thành \`${require('quick.db').fetch(`RenameTicket_${button.channel.id}`)}\``,
                    color: 0x00D700
                }
            })
            require('quick.db').delete(`DeleteRenameMessage_${button.channel.id}`);
        }
    } catch (err) {
        console.log(err)
    }
}
