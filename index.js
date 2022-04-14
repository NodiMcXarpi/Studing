//Lógica do process on, usando ele para chamar funções quando outras forem acionadas
//stdin == entrada de dados
//stdout == saída de dados
const questions = [
    'What the fuck did I learned today?',
    'What pissed me off today? What could I do to stop getting pissed off?',
    'What could I do to be better?',
    'What made me happy today?',
    'How many people did I helped today?'
]
const ask = (index = 0) => {
    process.stdout.write( "\n" + questions[index] + "\n")
}
ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length )
    } else{
        
    process.exit()}

})

process.on('exit', () =>{
    console.log(
        `Maneiro Rd do Boldin MecMec, amanhã vai ser melhor, liga pra essas cuzisse não, fará seu dia de amanhã melhor.
        
        Hoje você aprendeu:
        ${answers[0]}
        
        O que te deixou puto e vc poderia melhorar foi:
        ${answers[1]}
        
        Você também poderia melhorar em:
        ${answers[2]}
        
        O que te deixou feliz hoje foi:
        ${answers[3]}
        
        Hoje você ajudou:
        ${answers[4]}
        `
    )
})