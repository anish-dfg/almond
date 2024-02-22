import LoginButton from "~/components/auth/LoginButton";
import LogoutButton from "~/components/auth/LogoutButton";
import OpenAI from "~/components/OpenAI";

import Completions from "./components/openai/chat/Completions";

const App = () => {
  return (
    <>
      <section className="flex border-2 border-sky-50">
        <div className="app">HERE</div>
        <LoginButton />
        <LogoutButton />
        <OpenAI />
      </section>
    </>
  );
};

export default App;
