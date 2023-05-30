const fastify = require("fastify")({ logger: true });
fastify.register(require("./routes/items"));
// fastify.register(require("@fastify/postgres")),
// {
//   connectionString: "postgres://shiba:shiba@localhost/shiba",
// };

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
