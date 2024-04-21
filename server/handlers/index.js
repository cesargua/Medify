const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");


dotenv.config();
const apiKey = process.env.API_KEY;
const config = new GoogleGenerativeAI(apiKey);
const modelId = "gemini-pro";
const model = config.getGenerativeModel({ model: modelId });


module.exports = {
    compareMeds: async (req,res)=>{
        const promp = "What is are the dangers of mixing these two medications?";
        // const image = {
        // inlineData: {
        //     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
        //     mimeType: "image/png",
        // },
        // };
        const image = req.body;
        console.log(req.body);

        // const image2 = req.body.image2;

        // const result = await model.generateContent([prompt, image]);
        // const response = await result.response;
        // const text = response.text();
        // res.send({ response: text});
        res.send(image)
    }
}

