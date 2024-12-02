
const formulario = document.querySelector("form")
const respMedia = document.querySelector("h3")
const respSituacao = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = formulario.nomedoAluno.value
    const nota1 = Number(formulario.nota1.value)
    const nota2 = Number(formulario.nota2.value)
    const nota3 = Number(formulario.nota3.value)

    const media = (nota1 + nota2 + nota3) / 3

    if (media > 7){
        respSituacao.innerText = `Aluno Aprovado! `
    respSituacao.style.color = "green"
    }else if(media >= 5 || media <= 7 ){
        respSituacao.innerText = `Aluno em Recuperacao `
respSituacao.style.color = "grey"
    
}else {
    respSituacao.innerText = `Aluno Reprovado ): `
respSituacao.style.color = "red"
}





respMedia.innerText = `Media das Notas ${media}`

})








