import { useContexts } from "../../config/contextApp";
import { Genai } from "../../lib/Genai";


export function Text2Description(){

  const {setResponseData, setContentLoading} = useContexts()

 const generateData = async (userInput)=>{
   const prompt = `
You are an E-commerece Experter to write rich description with a good keywords for products to showcase in Indian e-commerce platforms
like Amazon.in, Flipkart, and Meesho.

Your descriptions should:
- the description should be with in 500 words
- Use friendly, concise English and optimal
- Mention features Indian customers care about (affordability, delivery, quality)
- Include local search words (e.g., kurti, mobile cover, saree, tiffin box)
- And it should be good and clear content to read and make the product rank in online shopping platform 

Input: "${userInput}"

Return JSON:
{
  "title": "string",
  "description": "string",
  "seo": ["string", "string", "string"]
}
`;

const result =  await Genai(prompt);

let rmMatch = result.match(/\{[\s\S]*\}/)

let parsed;

    try {
      parsed = JSON.parse(rmMatch ? rmMatch[0] : "{}");
    } catch (err) {
      console.error("Failed to parse AI output:", err);
      parsed = {
        title: "Invalid Output",
        description: result,
        seo: [],
      };
    }
setContentLoading(false);
setResponseData(parsed);
 }

 return {generateData};

}