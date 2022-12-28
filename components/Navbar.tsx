import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
function Navbar() {
  const CLIENT_ID = "c1f4309625494c848f3d90c0b3f96813";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const tokenElem = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));
      if (tokenElem) {
        token = tokenElem.split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
        setToken(token);
      }
    }
    if (token) {
      getProfile(token as string);
    }
  }, [token]);

  const login = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  const getProfile = async (token: string) => {
    try {
      // Make a request to the /me endpoint to get the user's profile information
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Request:", axios.request);
      console.log("Response:", data);
      // Retrieve the first image in the images array
      const url = data.images[0].url;
      console.log(url);
      // Return the profile picture URL
      setProfilePictureUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-black w-full h-16 place-items-center justify-between text-white">
        {/* milkcrate logo */}
        <div className="pl-4">
          <Link href="/">
            <img
              className="block object-scale-down h-8"
              src="milkcrate-logo.png"
              alt="milkcrate"
            />
          </Link>
        </div>

        {/* nav tabs */}
        <ul className="pr-4 hidden sm:flex space-x-4">
          <li className="m-auto">
            <Link href="/discover">Discover</Link>
          </li>
          <li className="m-auto">
            <Link href="/playlists">Playlists</Link>
          </li>
          <li className="m-auto">
            <Link href="/articles">Articles</Link>
          </li>
          <li className="m-auto">
            <Link href="/about">About</Link>
          </li>
          <li className="m-auto">
            {profilePictureUrl ? (
              <img
                src={profilePictureUrl}
                alt="Profile Picture"
                className="rounded-full"
                style={{ width: "50px", height: "50px" }}
              />
            ) : (
              <button
                onClick={login}
                className="bg-MCwhite hover:bg-MCorange p-2 rounded-full"
              >
                Login
              </button>
            )}
          </li>
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10 pr-4">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          {/* mobile nav tabs */}
          <ul className="p-4 text-2xl">
            <li className="hover:text-MCorange">
              <Link href="/#discover">Discover</Link>
            </li>
            <li className="hover:text-MCorange">
              <Link href="/#playlists">Playlists</Link>
            </li>
            <li className="hover:text-MCorange">
              <Link href="/#articles">Articles</Link>
            </li>
            <li className="hover:text-MCorange">
              <Link href="/#about">About</Link>
            </li>
            <li className="py-1 hover:text-MCorange">
              <button
                onClick={login}
                className="bg-MCwhite hover:bg-MCorange text-MCblack rounded-full py-1 px-2"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-MCorange h-1"></div>
      <div className="bg-MCred h-1"></div>
      <div className="bg-MCblue h-1"></div>
    </div>
  );
}
export default Navbar;
