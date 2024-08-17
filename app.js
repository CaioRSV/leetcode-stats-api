const port = process.env.PORT || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

require('dotenv').config();

const queries = require('./queries.js');
var graphql = require("graphql");

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.type('text/html').send(html)
})


// General stats fetching with username
fastify.get('/stats/:username/profile', async function (request, reply) {
    const { username } = request.params;

    const queryToExecute = queries.userProfileInfo;
    const variables = { username: username };

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryToExecute,
          variables: variables
        })
      });
    
      const result = await response.json();
      reply.send(result);

    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch users profile info', description: error});
    }
  })

  fastify.get('/stats/:username/languages', async function (request, reply) {
    const { username } = request.params;

    const queryToExecute = queries.userLanguageStats;
    const variables = { username: username };

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryToExecute,
          variables: variables
        })
      });
    
      const result = await response.json();
      reply.send(result);

    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch user language stats', description: error});
    }
  })

  fastify.get('/stats/:username/activity', async function (request, reply) {
    const { username } = request.params;

    const queryToExecute = queries.userActivityStats;
    const variables = { username: username };

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryToExecute,
          variables: variables
        })
      });
    
      const result = await response.json();
      reply.send(result);

    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch user activity history', description: error});
    }
  })


fastify.listen({host: host, port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>LeetCode Stats API - crsv</title>
    <style>
      body {
        display: flex;
        width: 100%;
        height: 100vh;
        margin: 0;
        background-color: black;
        justify-content: center;
        align-items: center;
        color: white;
        gap: 50px;
        font-family: Monospace;
        font-size: 20px;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: white;
        text-decoration: none; 
        background-color: rgba(100,100,255,0.5);
        padding: 15px;
        border-radius: 10px;
      }
      
      a:hover{
          filter: contrast(120%);
          transform: scale(105%);
          transition: transform 1.5s, filter 1s;
          duration: 500;
      }
      
      .imgGit{
          width: 32px;
          height: 32px;
          filter: invert(100%);
      }
      
      .leftBox{
          padding: 14px;
          background-color: rgba(255,255,255,0.05);
          border-radius: 10px;
          transition: background-color 1s;
      }
      
      .leftBox:hover{
          background-color: rgba(255,255,255,0.1);
      }
      
    </style>
  </head>
  <body>
    <div class="leftBox">
        <p>CaioRSV/leetcode-stats-api</p>
    </div>
    <a target="_blank" href="https://github.com/CaioRSV/leetcode-stats-api">
        <p>Repositório da API</p>
        
        <img class="imgGit" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
    </a>
  </body>
</html>

`