import "../index.css";
import Logo from "../svgs/Mercury-logotype.svg";
import { LoginProps } from "../interfaces/interfaces";
import Form from "../components/Form";

export default function Login({ setUser, user }: LoginProps) {
  return (
    <div className="LoginScreen">
      <img src={Logo} alt="Logo" className="logo"></img>
      <Form user={user} setUser={setUser} />
    </div>
  );
}
