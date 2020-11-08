const Discord = require('discord.js') // Puxando a livraria do discord.js   => npm install discord.js
const fs = require('fs')              // Puxando a livraria do fs           => npm install fs

const { token } = require('./config') // Puxando o arquivo config.js

// Criando um novo cliente com partials
const client = new Discord.Client({partials: ['MESSAGE', 'REACTION', 'CHANNEL']})

// Carregando os Handlers
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./comandos/");

// Carregando pasta dos handlers
["aliases", "commands"].forEach(x => client[x] = new Discord.Collection());
["comando", "evento"].forEach(x => require(`./handlers/${x}`)(client));

client.login(token) // Logando no token do bot