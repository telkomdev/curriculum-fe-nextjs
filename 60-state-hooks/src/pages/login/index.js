import HeaderAuth from '../../components/layouts/HeaderAuth';
import LoginComponent from '../../components/pages/login';

const Login = () => {
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <HeaderAuth
                heading="Masuk ke akun"
                paragraph="Belum punya akun? "
                linkName="Daftar disini"
                linkUrl="/register"
            />
            <LoginComponent/>
        </div>
    )
}

export default Login;
