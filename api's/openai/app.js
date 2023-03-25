const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const path = require("path");

const app = express();

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function main() {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt:
      "make a profile bio form a linkedin user that is a software engineer looking for a job, do not create a character, just make a good bio for any kind of person so they can use it as a template",
  });

  return console.log(completion.data.choices[0].text);
  // return { name: completion.data.choices[0].text };
}

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  send("index.html");
});

app.get("/api", async (req, res) => {
  const response = await main();
  res.send(response);
});

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
