import React from "react"
import { NavLink, Outlet } from "react-router-dom";
import DashnavItems from "./DashnavItems";



export default function Dashboard() {
        return (
            <>
                <div className="">
                    <h2>Dashboard</h2>
                </div>
                <div className="dash-cont">
                    <div className="dash-wrapper">
                        <div className="left-col">
                            <ul className="dash__nav">

                                {
                                    DashnavItems.map((item, index) => {
                                        return (
                                            <li
                                                className="link-item"
                                                key={item.name}
                                            >
                                                <NavLink to={item.path} className="nav-link">{item.name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        <div className="right-col">
                            <h1 className="dashboard-title">Dashboard</h1>

                            <Outlet />

                        </div>
                    </div>
                </div>
            </>
        )
}
