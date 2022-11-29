import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Headers from '../Shared/Header/Headers';

const DashboardLayout = () => {
    const{user}=useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (

        <div>
            <Headers></Headers>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My dashboard</Link></li>
                        
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link title='My Orders' to='/orders'>My Orders</Link></li>
                        
                        <li><Link title='All seller' to='/allseller'>All seller</Link></li>
                        
                        {
                            isAdmin && <>
                             <li><Link to='/seller'>All Seller</Link></li>
                            <li><Link to='/buyer'>All Buyer</Link></li>
                            </>
                        }
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;