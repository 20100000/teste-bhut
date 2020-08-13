<h1>Teste CRUD - bhut</h1>

<h3>Tecnologias usadas no projeto</h3>
Ambiente docker com framework docker-compose<br/>
Back-end NodeJs com framework Express.<br/>
JWT<br/>

<h3>Requisitos para rodar projeto</h3>
Docker é extremamente necessário porque a base de dados sera importada para dentro do conterner

<h3>Passo a passo para iniciar projeto 
<h4>1° Clone o projeto</h4> 
<pre>
git clone https://github.com/20100000/teste-bhut.git<br/>
cd teste-bhut
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
<h4>APIs</h4>
<h3>Outenticação para gerar tokem JWT</h3>
<pre>
curl -X POST \
  http://localhost:3000/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: f34a06f4-34ec-5992-d241-bdecee24fa18' \
  -d '{
	"email": "tiago@teste.com",
	"senha": "123456"
}'
</pre>
ou email:"teste@bhut.com" senha:"123456"

<h3>APIs com authorization insira o Bearer + tokem</h3>
<h3>Mostrar todos os carros</h3>
<pre>
curl -X GET \
  http://localhost:3000/carro \
  -H 'authorization: bearer tokem' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 1764c2e5-92ad-659a-1fe9-7fd6e80c8996'
</pre>

<h3>Mostrar unico carro </h3>
<pre>
curl -X GET \
  http://localhost:3000/carro/2 \
  -H 'authorization: bearer tokem' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 1764c2e5-92ad-659a-1fe9-7fd6e80c8996'
</pre>

<h3>Altear dados do carro </h3>
<pre>
curl -X PUT \
  http://localhost:3000/carro/2 \
  -H 'authorization: bearer tokem' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e9b13761-29f7-6dfd-25dd-d0170829587d' \
  -d '{
	"marca":"FOX",
	"ano":"2010",
	"modelo":"GW",
	"cor":"brancco",
	"combustivel":"alcool",
	"valor":"22.000,00"
}
'
</pre>
<h3>Salvar carro </h3>
<pre>
curl -X POST \
  http://localhost:3000/carro \
  -H 'authorization: bearer tokem' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 094d35ec-4e0d-eb0e-923c-b9e6cbb893ff' \
  -d '{
	"marca":"FOX",
	"ano":"2010",
	"modelo":"GW",
	"cor":"brancco",
	"combustivel":"alcool",
	"valor":"22.000,00"
}'
</pre>
<h3>Remover carro </h3>
<pre>
curl -X DELETE \
  http://localhost:3000/carro/1 \
  -H 'authorization: bearer tokem' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: ac533598-78d3-0e1d-fa53-e130ce8bff6c'
</pre>
