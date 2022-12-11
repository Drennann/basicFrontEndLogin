import Logo from "../svgs/Mercury-logotype.svg";
import logout from "../svgs/i24-logout.svg";
import { LoginProps } from "../interfaces/interfaces";
import ProfileCard from "../components/ProfileCard";

export default function Profile({ user, setUser }: LoginProps) {
  return (
    <div className="ProfileScreen">
      <img src={Logo} alt="Logo"></img>
      <div className="profileContainer">
        <ProfileCard user={user} setUser={setUser}/>
      </div>
    </div>
  );
}
