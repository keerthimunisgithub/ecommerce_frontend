import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
<BreadCrumb title="Reset Password"/>
<Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className="auth-card mb-3">
                    <h3 className='text-center'>
                        Reset Password
                    </h3>
                <form action="" className='d-flex flex-column gap-30'>
                <CustomInput type="password" 
                        name="password" 
                        placeholder='Password' />
                <CustomInput type="password" 
                         name="confpassword" 
                         placeholder='Confirm Password'  />

                    <div>
                        <div className="d-flex justify-content-center gap-15 align-items-center">
                            <button className='button border-0'>OK</button>
                            
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>    
 </Container> 
</>
  );
};

export default ResetPassword;