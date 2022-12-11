import Logo from "../svgs/Mercury-logotype.svg";
import { LoginProps } from "../interfaces/interfaces";
import ProfileCard from "../components/ProfileCard";

export default function Profile({ user, setUser }: LoginProps) {
  return (
    <div className="ProfileScreen">
      <img src={Logo} alt="Logo" className="logo"></img>
      <ProfileCard user={user} setUser={setUser}/>
    </div>
  );
}
