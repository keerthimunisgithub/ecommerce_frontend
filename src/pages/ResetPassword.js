import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
<BreadCrumb title="Reset Password"/>
<div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="auth-card mb-3">
                    <h3 className='text-center'>
                        Reset Password
                    </h3>
                <form action="" className='d-flex flex-column gap-30'>
                
                    <div>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Password' 
                        className="form-control" 
                        />
                    </div> 
                    <div>
                        <input 
                        type="password" 
                        name="confpassword" 
                        placeholder='Confirm Password' 
                        className="form-control" 
                        />
                    </div>
                    <div>
                        <div className="d-flex justify-content-center gap-15 align-items-center">
                            <button className='button border-0'>OK</button>
                            
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    
 </div> 
</>
  );
};

export default ResetPassword;