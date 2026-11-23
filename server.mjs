import { createServer } from 'node:http';

const port = Number(process.env.PORT ?? 8080);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535');
}

const homepage = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Календарь звонков</title>
  </head>
  <body>
    <main>
      <h1>Календарь звонков</h1>
      <p>Учебный проект Хекслета о записи на встречи.</p>
    </main>
  </body>
</html>`;

createServer((request, response) => {
  if (request.url?.split('?', 1)[0] !== '/') {
    response.writeHead(404).end();
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(request.method === 'HEAD' ? undefined : homepage);
}).listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
