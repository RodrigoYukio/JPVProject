**********BANCO**********

CREATE TABLE IF NOT EXISTS Pessoa (
    ID INT,
    NomeCompleto VARCHAR(255),
    DataNascimento DATE,
    ValorRenda DECIMAL(10,2),
    CPF VARCHAR(11)
);


**********VISUALSTUDIO (backend)**********

Ferramentas > Gerenciador de pacotes do NuGet > Configurações de Pacotes do Nuget > Origens do Pacote > Origem: https://www.myget.org/F/tnf/api/v3/index.json


**********VISUALSTUDIOCODE (frontend)**********

npm install
ng server
