import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./context/auth-context";

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //
    // useEffect(() => {
    //     const loggedInInfo = localStorage.getItem('isLoggedIn');
    //     if (loggedInInfo === '1') setIsLoggedIn(true);
    // }, []);
    //
    // const loginHandler = (email, password) => {
    //     // We should of course check email and password
    //     // But it's just a dummy/ demo anyways
    //     localStorage.setItem('isLoggedIn', '1');
    //     setIsLoggedIn(true);
    // };
    //
    // const logoutHandler = () => {
    //     localStorage.removeItem('isLoggedIn');
    //     setIsLoggedIn(false);
    // };

    const ctx = useContext(AuthContext);

    return (
        // <AuthContext.Provider value={{
        //     isLoggedIn: isLoggedIn,
        //     onLogout: logoutHandler
        // }}>
        <React.Fragment>
            <MainHeader /*isAuthenticated={isLoggedIn} onLogout={logoutHandler}*//>
            <main>
                {!ctx.isLoggedIn && <Login /*onLogin={loginHandler}*//>}
                {ctx.isLoggedIn && <Home /*onLogout={logoutHandler}*//>}
            </main>
        </React.Fragment>
        // </AuthContext.Provider>
    );
}

export default App;
