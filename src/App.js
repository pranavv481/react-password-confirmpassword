import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import classNames from "classnames";
function App() {
  const { register, handleSubmit, errors, getValues } = useForm({
    mode:"onTouched",
  });
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className="container my-5">
         <div className="card shadow mx-auto w-75">
             <div className="card-header">
               Password Confirm Password Validation
             </div>
             <div className="card-body">
             <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-group">
                 <input type="text"
                 placeholder="Email" 
                 className={classNames("form-control", {"is-invalid":errors.email})}
                 name="email" 
                 ref={register({
                  required:"this field is required",
                  pattern:{
                    value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Please Enter a valid email"
                  }
                 })}
                 />
                 {errors.email && (
                <div className="invalid-feedback">
                  {errors.email.message}
                </div>
              )}
               </div>
               <div className="form-group">
                 <input type="text" 
                 placeholder="password" 
                 className={classNames("form-control", {"is-invalid":errors.password})}
                 name="password" 
                 ref={register({
                  required:"this field is required",
                  pattern:{
                    value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:"Please Enter a valid password"
                  }
                 })}
                 />
                 {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
               </div>
               <div className="form-group">
                 <input type="text" 
                 placeholder="Confirm Password" 
                 className={classNames("form-control", {"is-invalid":errors.cpassword})}
                 name="cpassword" 
                 ref={register({
                  required:"this field is required",
                  validate:value=>value === getValues("password") || "password does not match",
                  pattern:{
                    value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:"Please Enter a valid password",
                   }
                 })}
                 />
                 {errors.cpassword && (
                <div className="invalid-feedback">
                  {errors.cpassword.message}
                </div>
              )}
               </div>
              
               <button type="submit" className="btn btn-primary" >Register</button>
               </form>
             </div>
         </div>
      </div>
    </div>
  );
}

export default App;
