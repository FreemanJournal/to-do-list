import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcExport } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import auth from '../../utilities/firebase.init';
export default function Navbar() {
    const [user] = useAuthState(auth);
    const menuItems = [
        { item: 'Home', href: "/", status: !!user },
        { item: 'SignIn', href: "/signIn", status: !user },
    ]

    const signOutHandler = () => {
        signOut(auth);
    };
    return (
        <section className="navbar bg-base-100 mx-auto md:px-20">
            <div className="navbar-start w-10/12">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems.map((menu, index) => (
                            <NavLink to={menu.href} style={({ isActive }) => isActive ? { background: "rgb(71 85 105 / 1)", color: "white" } : {}} key={index} className={`btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300 ${menu.status ? "" : "hidden"}`}>{menu.item}</NavLink>
                        ))}
                        {user && <button onClick={() =>signOutHandler()} className='btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300'>Sign Out</button>}
                    </ul>
                </div>
                <NavLink to={"/"} className="normal-case text-xl font-medium">Smart To-Do App</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems.map((menu, index) => (
                        <NavLink to={menu.href} key={index} style={({ isActive }) => isActive ? { background: "rgb(71 85 105 / 1)", color: "white" } : {}} className={`btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300 ${menu.status ? "" : "hidden"}`}>{menu.item}</NavLink>
                    ))}
                    {user && <button onClick={() => signOutHandler()} className='btn btn-ghost mx-3 hover:bg-slate-600 hover:text-white duration-300'>Sign Out</button>}

                </ul>
            </div>
            <div className="navbar-end  lg:hidden">
                <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-3xl cursor-pointer"><FcExport/></label>
            </div>

        </section >
    )
}
