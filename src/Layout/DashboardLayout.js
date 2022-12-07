import React, { useContext } from 'react';
import Navbar from '../Pages/SharedPage/Navbar/Navbar';

import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
      <li><Link to="/dashboard">Dashboard</Link></li>
      
      {isAdmin && <>
        <li><Link to="/dashboard/allusers">All User</Link></li>
        <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
        <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li>
      </>}
    </ul>
  
  </div>
</div>
        </>
    );
};

export default DashboardLayout;