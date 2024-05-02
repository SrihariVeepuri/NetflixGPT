import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unscbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unbscribe
    return () => unscbscribe();
  }, []);
  return (
    <div className=" flex justify-between w-screen h-20 absolute z-10 px-36 py-1 bg-gradient-to-b from-black ">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 m-4 p1 rounded-full"
            src={user?.photoURL}
            alt="user-logo"
          />
          <button
            onClick={handleSignOut}
            className="m-1 p-1 text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
