class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
}

class Biblioteca{
    Nome
    Endereco
    Telefone

    BuscarLivro(livroParametro){
        livros.forEach((livro,index) =>{
            if(livro[index] == livroParametro){
                console.log(livro)
            }
        })
    }

    VerificarDisponibilidade(nomeLivro){
        livros.forEach((livro) =>{
            if(livro.Titulo == nomeLivro){
                if(livro.Disponibilidade == "Disponivel"){
                    livro.Disponibilidade = true
                }
                else{
                    livro.Disponibilidade = false
                }
            }
        })
    }

    DevolverLivro(nomeLivro){
        livros.forEach((livro) =>{
            if(livro.VerificarDisponibilidade(nomeLivro)){
               livro.Disponibilidade = "Indisponivel"
            }
        })
    }
}


let livroUm = new Livro()
livroUm.Titulo = "Arte da Guerra"
livroUm.Autor = "Sun Tzu"
livroUm.Editora = "Desconhecido"
livroUm.AnoDePublicacao = 1999
livroUm.Disponibilidade = "Disponivel"

let livroDois = new Livro()
livroUm.Titulo = "Outsider"
livroUm.Autor = "Stephen King"
livroUm.Editora = "Suma"
livroUm.AnoDePublicacao = 2018 
livroUm.Disponibilidade = "Indisponivel"

let livros = []
livros.push(livroUm)
livros.push(livroDois)


let bibliotecaMuriae = new Biblioteca()
bibliotecaMuriae.Nome = "Biblioteca de Muriaé"
bibliotecaMuriae.Endereco = "Rua Silvera Brum"
bibliotecaMuriae.Telefone = "3728-3072"
bibliotecaMuriae.BuscarLivro(livroUm.Titulo)
bibliotecaMuriae.VerificarDisponibilidade(livroUm.Titulo)
bibliotecaMuriae.DevolverLivro(livroDois.Titulo)