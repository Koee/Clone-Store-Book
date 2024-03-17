import React, { useContext, useState } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiCloudUpload, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import ImgUserDask from "../assets/img-daskboard/profile.jpg"
import { AuthContext } from '../contects/AuthProvider';

const Sidebarr = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Logo href="#" img={user.photoURL ? user.photoURL : ImgUserDask} imgAlt="Flowbite logo" >
                    {user.displayName ? user.displayName : `Default Name`}
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/update" icon={HiCloudUpload}>
                            Create/Update-Book
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/manager" icon={HiUser}>
                            Manager-DaskBoard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="/logout" icon={HiTable}>
                            Log Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiSupport}>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default Sidebarr