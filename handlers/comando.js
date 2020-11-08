const { readdirSync } = require("fs") // Puxando livraria fs

// Leitura dos comandos
module.exports = (client) => {
  console.log(`\nCarregando comandos...`)
 
  // Lendo as categorias
  readdirSync("./comandos/").forEach((dir) => {
 
    // Filtrando para apenas arquivos terminados em .js
    const commands = readdirSync(`./comandos/${dir}/`).filter((file) =>
      file.endsWith(".js")
    )
    
    // Lendo os comandos
    for (let file of commands) {
      let pull = require(`../comandos/${dir}/${file}`)

      if (pull.name) {
        client.commands.set(pull.name, pull)
        console.log(`${file} ✅`) // Caso o comando esteja OK
      } else {
        console.log(`${file} ❌`) // Caso o comando tenha algum erro
        continue
      }

      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name)) // Puxando as aliases (sinônimos)
    }
  })
  console.log(`Comandos carregados.\n`)
}