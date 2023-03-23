// const np = require("numjs");
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey:"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",
//   });
// const openai = new OpenAIApi(configuration);

// async function getSimilarityScore() {
//   const input = ["feline friends say", "meow"];
//   const resp = await openai.createEmbedding({
//     input: input,
//     model: "text-similarity-davinci-001",
//   });

//   const embedding_a = np.array(resp.data[0].embedding);
//   const embedding_b = np.array(resp.data[1].embedding);

//   const dotProduct = np.dot(embedding_a, embedding_b);
//   const normA = np.linalg.norm(embedding_a);
//   const normB = np.linalg.norm(embedding_b);
//   const similarity_score = dotProduct / (normA * normB);

//   console.log (similarity_score);
// }

// getSimilarityScore();

const math = require('mathjs');
const np = require("numjs");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

async function getSimilarityScore() {
  const input = [`text1`, `text2`];
  const resp = await openai.createEmbedding({
    input: input,
    model: "text-embedding-ada-002",
  });

//   console.log(resp); 
const embedding_a = Array.from(resp.data.data[0].embedding);
const embedding_b = Array.from(resp.data.data[1].embedding);
//   console.log(embedding_a, embedding_b); 

const dotProduct = embedding_a.reduce((acc, curr, i) => acc + curr * embedding_b[i], 0);
const normA = Math.sqrt(embedding_a.reduce((acc, curr) => acc + curr ** 2, 0));
const normB = Math.sqrt(embedding_b.reduce((acc, curr) => acc + curr ** 2, 0));
  const similarity_score = dotProduct / (normA * normB);
  console.log (`similarity score is: ${similarity_score}`);
  
 
  
}

getSimilarityScore();
