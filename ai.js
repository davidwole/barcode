const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


async function checkProductRating(product) {
  const prompt = `what product is this ${product}? And what would you rate it out of 100 based on internet reviews, Please just return score and no other text`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rating = await response.text();
    
    return rating.trim();

}



module.exports = {
  checkProductRating
};
