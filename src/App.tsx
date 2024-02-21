import LoginButton from "~/components/auth/LoginButton";
import LogoutButton from "~/components/auth/LogoutButton";
import OpenAI from "~/components/OpenAI";

const App = () => {
  return (
    <>
      <section className="border-sky-50">
        <div className="app">HERE</div>
        <LoginButton />
        <LogoutButton />
        <OpenAI />
      </section>
    </>
  );
};

export default App;
