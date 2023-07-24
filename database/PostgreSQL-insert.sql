INSERT INTO filme
(titulo, ano, streaming, classificacao)

VALUES
('A Mulher Rei', 2022, 'HBO Max', '14 anos'),
('Encanto', 2021, 'Disney Plus', 'Livre'),
('Jogos Vorazes', 2012, 'Netflix', '14 anos'),
('Tudo em Todo o Lugar ao Mesmo Tempo', 2022, 'Prime Video', '14 anos'),
('A Baleia', 2023, 'Youtube', '16 anos'),
('Nao! Nao Olhe!', 2022, 'Youtube', '14 anos'),
('Questao de Tempo', 2013, 'Star Plus', '12 anos'),
('O Menu', 2022, 'Star Plus', '16 anos'),
('Hereditario', 2018, 'Netflix', '16 anos');INSERT INTO filme
(titulo, ano, streaming, classificacao)

VALUES
('A Mulher Rei', 2022, 'HBO Max', '14 anos'),
('Encanto', 2021, 'Disney Plus', 'Livre'),
('Jogos Vorazes', 2012, 'Netflix', '14 anos'),
('Tudo em Todo o Lugar ao Mesmo Tempo', 2022, 'Prime Video', '14 anos'),
('A Baleia', 2023, 'Youtube', '16 anos'),
('Nao! Nao Olhe!', 2022, 'Youtube', '14 anos'),
('Questao de Tempo', 2013, 'Star Plus', '12 anos'),
('O Menu', 2022, 'Star Plus', '16 anos'),
('Hereditario', 2018, 'Netflix', '16 anos');


INSERT INTO ator
(nome, sobrenome, genero)

VALUES
('Viola', 'Davis', 'feminino'),
('John', 'Boyega', 'masculino'),
('Stephanie', 'Beatriz', 'feminino'),
('John', 'Leguizamo', 'masculino'),
('Jennifer', 'Lawrence', 'feminino'),
('Josh', 'Hutcherson', 'masculino'),
('Michelle', 'Yeoh', 'feminino'),
('Quan', 'Ke Huy', 'masculino'),
('Sadie', 'Sink', 'feminino'),
('Brendan', 'Fraser', 'masculino'),
('Keke', 'Palmer', 'feminino'),
('Daniel', 'Kaluuya', 'masculino'),
('Rachel', 'McAdams', 'feminino'),
('Domhnall', 'Gleeson', 'masculino'),
('Anya', 'Taylor-Joy', 'feminino'),
('Ralph', 'Fiennes', 'masculino'),
('Nicholas', 'Hoult', 'masculino'),
('Toni', 'Collette', 'feminino'),
('Alex', 'Wolff', 'masculino');


INSERT INTO diretor
(nome, sobrenome)

VALUES
('Gina', 'Prince-Bythewood'),
('Charise', 'Castro Smith'),
('Byron', 'Howard'),
('Jared', 'Bush'),
('Gary', 'Ross'),
('Daniel', 'Scheinert'),
('Daniel', 'Kwan'),
('Darren', 'Aronofsky'),
('Jordan', 'Peele'),
('Richard', 'Curtis'),
('Mark', 'Mylod'),
('Ari', 'Aster');


INSERT INTO genero
(genero)

VALUES
('Acao'),
('Animacao'),
('Aventura'),
('Comedia'),
('Drama'),
('Ficcao Cientifica'),
('Romance'),
('Suspense'),
('Terror');


INSERT INTO atores_filmes
(id_filme, cod_ator)
VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8),
(5, 9),
(5, 10),
(6, 11),
(6, 12),
(7, 13),
(7, 14),
(8, 15),
(8, 16),
(8, 17),
(9, 18),
(9, 19);


INSERT INTO diretores_filmes
(id_filme, cod_diretor)
VALUES
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 5),
(4, 6),
(4, 7),
(5, 8),
(6, 9),
(7, 10),
(8, 11),
(9, 12);


INSERT INTO generos_filmes
(id_filme, cod_genero)
VALUES
(1, 1),
(1, 5),
(2, 2),
(2, 4),
(3, 1),
(3, 3),
(3, 6),
(4, 1),
(4, 4),
(4, 5),
(4, 6),
(5, 5),
(6, 6),
(6, 8),
(6, 9),
(7, 7),
(8, 8),
(9, 5),
(9, 9);