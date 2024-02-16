import { useState } from "react";

import axios from "axios";

const OpenAI = () => {
  const [data, setData] = useState<string>("");

  const handleFetchChatCompletion = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: any,
  ) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8888/api/v1/ai", {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content":
            "are you kidding me? the song is by RCHP. now complete the lyric correctly: sometimes i feel like i don't have a partner...",
        },
      ],
      "temperature": 1,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "max_tokens": 50,
      "presence_penalty": 0,
      "frequency_penalty": 0,
    });
    setData(() => res.data);
  };
  return (
    <div>
      OpenAI
      <button className="btn btn-large" onClick={handleFetchChatCompletion}>
        Click me
      </button>
      {data !== "" ? <div className="data">{JSON.stringify(data)}</div> : <></>}
    </div>
  );
};

export default OpenAI;
