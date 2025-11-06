import { useContexts } from "../../config/contextApp";
import { Genai } from "../../lib/Genai";


export function Text2Description(){

  const {setResponseData, setContentLoading} = useContexts()

 const generateData = async (userInput)=>{
   const prompt = `
You are an AI trained to write product content for Indian e-commerce platforms
like Amazon.in, Flipkart, and Meesho.

Your descriptions should:
- Use friendly, concise English with optional Hindi-style tone mix
- Mention features Indian customers care about (affordability, delivery, quality)
- Avoid overly Western references
- Include local search words (e.g., kurti, mobile cover, saree, tiffin box)

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