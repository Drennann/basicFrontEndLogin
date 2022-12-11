import { LoginProps } from "../interfaces/interfaces";
import logout from "../svgs/i24-logout.svg";

export default function ProfileCard({setUser, user}: LoginProps){
    return(
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
    )
}