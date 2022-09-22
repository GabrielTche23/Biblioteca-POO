class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
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

class Biblioteca{
    Nome
    Endereco
    Telefone

    BuscarLivro(livroParametro){
        livros.forEach((livro,index) =>{
            if(livro == livroParametro){
                console.log(livro)
            }
        })
    }
}