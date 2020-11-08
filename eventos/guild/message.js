
// Iniciando o evento message
module.exports = async (client, message) => {  // Puxando client e parâmetros

    if (message.author.bot) return // Privando para bots não poderem usar comandos

    if (message.channel.type === 'dm') return // Comandos não funcionarão na DM do bot

    let { prefix } = require('../../config') // Puxando o nosso prefixo

    if (!message.content.startsWith(prefix)) return // Retornando caso a mensagem não comece com o prefixo

    // Setando args para utilizar nos comandos
    let args = message.content.slice(prefix.length).trim().split(/ +/g)

    // Setando o que é o comando na mensagem
    let cmd = args.shift().toLowerCase()

    let command = client.commands.get(cmd) // Puxando o comando correspondente
    if (!command) command = client.commands.get(client.aliases.get(cmd)) // Verificando se há sinônimos (aliases)

    if (command) command.run(client, message, args) // Carregando o comando utilizado

}