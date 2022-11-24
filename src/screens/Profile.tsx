import Logo from "../svgs/Mercury-logotype.svg";
import logout from "../svgs/i24-logout.svg";
import { LoginProps } from "../interfaces/interfaces";

export default function Profile({ user, setUser }: LoginProps) {
  return (
    <div className="ProfileScreen">
      <img src={Logo} alt="Logo"></img>
      <div className="profileContainer">
        {user?.data && (
          <>
            <img src={"./"+user.data.avatar} width={80} height={80} alt="avatar"></img>
            <p>That's it, {user.data.name}!</p>
            <button className="LoginButton" onClick={() => setUser({})}>
              <img src={logout} alt="logout"></img>
              <p>Logout</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
