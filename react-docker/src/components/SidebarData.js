import React from 'react'
import { AiFillHome, AiFillFile } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

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
]
