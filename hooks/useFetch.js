import { useState } from "react";
import { OPEN_AI_KEY } from "@env";

function useFetch() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API = "https://api.openai.com/v1/completions";

  const fetchApi = async (news, delay = 400) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (news) {
          const response = {
            model: "text-davinci-003",
            prompt: "Is this news correct? " + news,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          };

          const data = await fetch(API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + OPEN_AI_KEY,
            },
            body: JSON.stringify(response),
          });
          const result = await data.json();

          setResult(result.choices[0].text.trim());
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    }, delay);
  };

  return [result, loading, error, fetchApi];
}

export default useFetch;
