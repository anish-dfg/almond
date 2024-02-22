import React from "react";
import { CompletionResponse } from "~/services/openai/chat-completions";

type Props = {
  data: CompletionResponse;
};

const Completion: React.FC<Props> = ({ data }) => {
  return (
    <div className="border-1 flex flex-col border-red-300">
      <p>{data.id}</p>
      <p>{data.model}</p>
    </div>
  );
};

export default Completion;
