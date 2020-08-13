<h1>Teste API Rest Pokémon - ADTSys</h1>

<h3>Tecnologias usadas no projeto</h3>
Ambiente docker com framework docker-compose<br/>
Back-end NodeJs com framework Express.<br/>
teste jasmine<br/>
Front-end Html, javascript, ajax e Jquery index.html na raiz do projeto

<h3>Requisitos para rodar projeto</h3>
Docker é extremamente necessário porque APPID do OpenWeatherMap
 esta declarada como variável de ambiente no dockerfile <strong>ENV PASSWORD_WEATHER</strong>.<br/>
 Instale nodejs e npm para instalar dependencias e rodar os testes.

<h3>Passo a passo para iniciar projeto 
<h4>1° Clone o projeto</h4> 
<pre>
git clone https://github.com/20100000/teste-adtsys.git<br/>
cd teste-adtsys
</pre>
<h4>2° Instale as dependências</h4>  
na raiz do projeto
crie node_module com as dependências.<br/>
<pre>
npm install
</pre>
<h4>3° Iniciar projeto</h4>
start back-end com docker-compose <br/>
<pre>
docker-compose up<br/>
</pre>
<strong>ou</strong><br/>
sem docker-compose<br/>
<pre>
docker build -t node10 . <br/>
docker run -p 3000:3000 -d node10<br/>
</pre>
node10 e o nome da image, se preferir coloque o nome que quiser.<br/>
Rode o contener na porta 3000 por causa do front-end url do ajax ta apontando para o mesmo.<br/>

<h4>4° Execute o front-end</h4>
url no meu caso file:///teste-adtsys/index.html ou
click em index.html na raiz do projeto, ou seja, execute a index.html no navegador ela e o front-end da aplicação.<br/>
Digite o nome da cidade e click no botão enviar.
<img src="img/res.png" width="60%"/>

<h4>5̣° Teste unitario da API</h4>
<pre>
docker-compose up -d<br/>
</pre>
em seguida<br>
<pre>
npm test
</pre>