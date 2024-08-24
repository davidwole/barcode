const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


async function checkProductRating(product) {
  // const prompt = `How would you rate the "${product}" on a scale of 1-100 from reviews around the internet, return only the score`;
  const prompt = `What is this "${product}" product from this barcode?`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rating = await response.text();

    return rating.trim();

}



module.exports = {
  checkProductRating
};