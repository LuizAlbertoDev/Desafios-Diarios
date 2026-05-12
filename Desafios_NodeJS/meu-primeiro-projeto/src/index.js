const player1 = {
    nome: "Mario",
    velocidade:4,
    manobrabilidade:3,
    poder:3,
    pontos:0
}

const player2 = {
    nome: "Luigi",
    velocidade:3,
    manobrabilidade:4,
    poder:3,
    pontos:0
}

async function rollDice(){
     return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result 
    switch(true){
        case random <0.33:
            result= "RETA"
            break
        case random <0.66:
            result = "CURVA"
            break
        default:
            result = "CONFRONTO"
    }
    return result
}

async function logRollResult(caracterName, block, diceResult,attribute){
    console.log(`${caracterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function getRandomItem(){
    return Math.floor(Math.random() * 3)
}

async function playRaceEngine(caracter1, caracter2){
    for(let round = 1; round <= 5; round++){
        console.log(`\n \n🏁 Rodada ${round} \n`)

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        // rolar dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        // teste de habilidade
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if(block === "RETA"){
            totalTestSkill1 = caracter1.velocidade + diceResult1
            totalTestSkill2 = caracter2.velocidade + diceResult2

            await logRollResult(
                caracter1.nome,
                "velocidade",
                diceResult1,
                caracter1.velocidade
            )
            await logRollResult(
                caracter2.nome,
                "velocidade",
                diceResult2,
                caracter2.velocidade
            )

        }
        if(block === "CURVA"){
            totalTestSkill1 = caracter1.manobrabilidade + diceResult1
            totalTestSkill2 = caracter2.manobrabilidade + diceResult2

            await logRollResult(
                caracter1.nome,
                "manobrabilidade",
                diceResult1,
                caracter1.manobrabilidade
            )
            await logRollResult(
                caracter2.nome,
                "manobrabilidade",
                diceResult2,
                caracter2.manobrabilidade
            )
        }
        if(block === "CONFRONTO"){

            let powerResult1 = diceResult1 + caracter1.poder
            let powerResult2 = diceResult2 + caracter2.poder

            console.log(`${caracter1.nome} VS ${caracter2.nome} 🥊`)

            await logRollResult(
                caracter1.nome,
                "PODER",
                diceResult1,
                caracter1.poder
            )

            await logRollResult(
                caracter2.nome,
                "PODER",
                diceResult2,
                caracter2.poder
            )

            let item = await getRandomItem()

            let itemName = ""
            let damage = 0
            let turbo = false

            switch(item){

                case 0:
                    itemName = "🐢 Casco"
                    damage = 1
                    break

                case 1:
                    itemName = "💣 Bomba"
                    damage = 2
                    break

                case 2:
                    itemName = "🚀 Turbo"
                    damage = 1
                    turbo = true
                    break
            }

            if(powerResult1 > powerResult2){

                console.log(`${caracter1.nome} venceu o confronto usando ${itemName}!`)

                caracter2.pontos = Math.max(0, caracter2.pontos - damage)

                console.log(`${caracter2.nome} perdeu ${damage} ponto(s)!`)

                if(turbo){
                    caracter1.pontos++
                    console.log(`${caracter1.nome} ganhou +1 ponto de turbo 🚀`)
                }

            }

            else if(powerResult2 > powerResult1){

                console.log(`${caracter2.nome} venceu o confronto usando ${itemName}!`)

                caracter1.pontos = Math.max(0, caracter1.pontos - damage)

                console.log(`${caracter1.nome} perdeu ${damage} ponto(s)!`)

                if(turbo){
                    caracter2.pontos++
                    console.log(`${caracter2.nome} ganhou +1 ponto de turbo 🚀`)
                }

            }

            else{
                console.log("🤝 Confronto empatado! Ninguém perdeu pontos!")
            }
        }
        // verificando vencedor do confronto
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${caracter1.nome} marcou um ponto!`)
            caracter1.pontos++
        }
        else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${caracter2.nome} marcou um ponto!`)
            caracter2.pontos++
        }
    }

}

async function declareWinner(caracter1,caracter2){
    console.log("Resultado Final !")
    console.log(`${caracter1.nome}: ${caracter1.pontos} ponto(s)`)
    console.log(`${caracter2.nome}: ${caracter2.pontos} ponto(s)`)

    if(caracter1.pontos > caracter2.pontos)
        console.log(`\n🏆 ${caracter1.nome} é o vencedor!🏆`)
    else if(caracter2.pontos > caracter1.pontos)
        console.log(`\n🏆 ${caracter2.nome} é o vencedor!🏆`)
    else
        console.log("\n🤝 A corrida terminou empatada!🤝")
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome}` )
    await playRaceEngine(player1,player2)
    await declareWinner(player1,player2)
})()
