import { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import NavMenuInside from "./NavMenuInside";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  // console.log("user name outside", userName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
        // console.log("user name inside", userName);
      } else {
        navigate("/");
      }
    });
  }, [userName, navigate]);

  const handleAuth = () => {
    // provider.setCustomParameters({
    //   prompt: "select_account",
    // });

    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          if (error.code === "auth/cancelled-popup-request") {
            alert("The sign-in popup request was cancelled by the user.");
          } else if (error.code === "auth/popup-closed-by-user") {
            alert("Sign-in popup was closed by the user before completion.");
          } else {
            alert("Error occurred during sign-in:" + error.message);
            alert("An error occurred during sign-in. Please try again later.");
          }
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (result) => {
    dispatch(
      setUserLoginDetails({
        name: result?.displayName,
        email: result?.email,
        photo: result?.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <NavMenuInside />
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <NavMenu>
                <NavMenuInside />
              </NavMenu>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  /* padding: 0; */
  width: 80px;
  margin-top: 4px;
  /* max-height: 70px; */
  /* font-size: 0; */
  /* display: inline-block; */

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  /* justify-content: flex-end; */
  margin: 0px;
  padding: 0px;
  /* position: relative; */
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      /* width: 20px; */
      /* z-index: auto; */
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      position: relative;
      /* white-space: nowrap; */

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        opacity: 0;
        height: 2px;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        /* visibility: hidden; */
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        /* visibility: visible; */
        opacity: 1;
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2 ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%);
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  min-width: 100px;
  width: auto;
  opacity: 0;
  display: none;

  ${NavMenu} {
    margin-bottom: 20px;

    @media (min-width: 900px) {
      display: none;
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 4px;
      margin: 0 0 10px 0;
    }

    a {
      padding: 0;
      margin-bottom: 10px;
    }
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      display: block;
      transition-duration: 1s;
    }
  }
`;

export default Header;
