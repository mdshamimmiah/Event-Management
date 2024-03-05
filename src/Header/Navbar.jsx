

import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';


        const Navbar = () => {

            const { user, logOut } = useContext(AuthContex);
            const handleLogOut = () =>{
                logOut()
                .then(() =>console.log('user loged out successfully'))
                .catch(error => console.error(error))
            }

            const Navlinks = <>
                <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/login'>Login</NavLink></li>
               <li><NavLink to='/register'>Register</NavLink></li>
               <li><NavLink to='/events'>Events</NavLink></li>
              
              
            { user && <>
                 <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/rules'>Service Rule</NavLink></li>
                
                </>



            }
        
            </>
            return (
                <div className="navbar bg-slate-400">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {Navlinks}
                            </ul>
                        </div>
        
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Navlinks}
                        </ul>
                    </div>
                    
                    <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                 
                </div>
              </label>
            
                  
                    </div>
                    <div>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className='btn btn-sm w-[50px]' href="">Sign Out</a>
                 
                    
                    </>
                    :<Link to='/login'>
                         <button className='btn btn-sm w-[50px]' href="">Login</button>
                    
                    </Link>
                }
                          
          
                    </div>
                </div>
            );
};

export default Navbar;