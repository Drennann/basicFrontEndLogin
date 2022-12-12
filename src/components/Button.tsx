import {ButtonProps} from "../interfaces/interfaces"

export default function Button({children, setUser}: ButtonProps) {
  return (
    <>
      <button className="LoginButton" onClick={() => setUser? setUser({}) : null}>
        {children}
      </button>
    </>
  );
}
