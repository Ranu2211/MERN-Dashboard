import React, {useState} from "react";
import { Box, useMediaQuery} from '@mui/material';
import { Outlet} from "react-router-dom"
import { useSelector} from 'react-redux';
import Navbar from 'components/Navbar.jsx';
import Sidebar from 'components/Sidebar';
import { useGetUserQuery } from "state/api";

const Layout = () => {
    const isNonMobile = useMediaQuery("min-width: 600px");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    console.log(userId)
     const data  =  useGetUserQuery(userId);
    // const { data, error, isLoading } = useGetUserQuery({ queryArg: userId });

    console.log('data', data)

    return (
        <Box display={isNonMobile? "flex" : "block"} width = "100%" height="100%">
            <Sidebar
            user = {data || {}}
            isNonMobile={isNonMobile}
            drawerWidth = "250px"
            isSidebarOpen= {isSidebarOpen}
            setIsSidebarOpen = {setIsSidebarOpen}
            />
            <Box>
        <Navbar user = {data || {}}
        isSidebarOpen= {isSidebarOpen}
            setIsSidebarOpen = {setIsSidebarOpen}/>
        <Outlet/>
        </Box>
        </Box>
    );
};
export default Layout;