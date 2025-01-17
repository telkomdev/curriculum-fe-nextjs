import { useState } from 'react';
import { loginFields } from './constants';
import FormAction from '../../elements/FormAction';
import Input from '../../elements/Input';
import { useAuth } from '../../../context/auth';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field=> fieldsState[field.id] = '');

export default function Login(){
    const { login } = useAuth();
    const [loginState, setLoginState] = useState(fieldsState);
    const [alert, setAlert] = useState(false);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginState.email === 'test@test.com' && loginState.password === 'test') {
            setAlert(false);
            login(loginState);
        } else {
            setAlert(true);
        }
    };

    return (
        <form className="grid place-items-center" onSubmit={handleSubmit}>
            <div className="sm:w-1/2 w-full">
                {alert && (
                    <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded flex items-center justify-between" role="alert">
                        <p>
                            <strong className="font-bold">Gagal masuk!</strong>
                            <span className="block sm:inline"> Periksa kembali email dan password.</span>
                        </p>
                        <span className="text-red-500 text-2xl cursor-pointer" onClick={() => setAlert(false)}>
                            &times;
                        </span>
                    </div>
                )}
                {
                    fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Masuk"/>
            </div>
        </form>
    )
}