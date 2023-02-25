import React from 'react'
import { AiFillHome, AiFillFile } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        icon:  <AiFillHome />,
        link:  "/",
    },
    {
        title: "Memo",
        icon:  <AiFillFile />,
        link:  "/memo",
    },
    {
        title: "Login",
        icon:  <BiLogIn />,
        link:  "/login",
    },
    {
        title: "Register",
        icon:  <BsFillPersonPlusFill />,
        link:  "/register",
    },
]
