SELECT titulo, ano FROM filme WHERE ano <= 2020 AND classificacao = '14 anos';

SELECT id_filme FROM Generos_Filmes WHERE cod_genero = 1;

SELECT nome, sobrenome FROM Ator WHERE genero = 'feminino';

SELECT cod_diretor FROM Diretores_Filmes WHERE id_filme = 2;
