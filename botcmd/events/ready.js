const chalk = require('chalk');
const figlet = require("figlet");


module.exports = async function(client)
  {
    console.log(chalk.yellow.bold(figlet.textSync("Táo Dang Cap")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Đã Chạy"));
  

}

