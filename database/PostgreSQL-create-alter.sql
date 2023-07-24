CREATE TABLE Filme ( 
 titulo VARCHAR(90) NOT NULL,  
 ano INT NOT NULL,  
 streaming VARCHAR(40) NOT NULL, 
 id_filme SERIAL PRIMARY KEY,  
 classificacao VARCHAR(10) NOT NULL  
);

CREATE TABLE Genero 
( 
 cod_genero SERIAL PRIMARY KEY,  
 genero VARCHAR(30) NOT NULL  
);

CREATE TABLE Ator 
( 
 sobrenome VARCHAR(30) NOT NULL,  
 cod_ator SERIAL PRIMARY KEY,  
 nome VARCHAR(30) NOT NULL,  
 genero VARCHAR(30)  
);

CREATE TABLE Diretor 
( 
 cod_diretor SERIAL PRIMARY KEY,  
 sobrenome VARCHAR(30) NOT NULL,  
 nome VARCHAR(30) NOT NULL  
); 

CREATE TABLE Diretores_Filmes 
( 
 id_diretores_filmes SERIAL PRIMARY KEY,
 cod_diretor INT NOT NULL,  
 id_filme INT NOT NULL  
); 

CREATE TABLE Generos_Filmes 
( 
 id_generos_filmes SERIAL PRIMARY KEY,
 id_filme INT NOT NULL,  
 cod_genero INT NOT NULL  
);

CREATE TABLE Atores_Filmes 
( 
 id_atores_filmes SERIAL PRIMARY KEY,
 id_filme INT NOT NULL,  
 cod_ator INT NOT NULL  
);

ALTER TABLE Diretores_Filmes ADD CONSTRAINT fk_Diretores FOREIGN KEY (cod_diretor) REFERENCES Diretor (cod_diretor);
ALTER TABLE Diretores_Filmes ADD CONSTRAINT fk_Filmes FOREIGN KEY (id_filme) REFERENCES Filme (id_filme);

ALTER TABLE Atores_Filmes ADD CONSTRAINT fk_Atores FOREIGN KEY (cod_ator) REFERENCES Ator (cod_ator);
ALTER TABLE Atores_Filmes ADD CONSTRAINT fk_Filmes FOREIGN KEY (id_filme) REFERENCES Filme (id_filme);

ALTER TABLE Generos_Filmes ADD CONSTRAINT fk_Generos FOREIGN KEY (cod_genero) REFERENCES Genero (cod_genero);
ALTER TABLE Generos_Filmes ADD CONSTRAINT fk_Filmes FOREIGN KEY (id_filme) REFERENCES Filme (id_filme);