import React, { Suspense, lazy } from "react";

const ArticleForm = lazy(() => import('./core/ArticleForm'));

import './style/register.styles.scss';
const Register = () => {
  return (
    <div>
      <button className="btn-register">Regsiter Now</button>
      <div className="register-form">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleForm/>
        </Suspense>
      </div>
    </div>
    
  )
}

export default Register;