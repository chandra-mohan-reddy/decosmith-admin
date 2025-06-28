import { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import LazyLoad from "./routes/LazyLoad";
import Loader from "./components/Loader";
// import { authClient } from "./utils/httpClient";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserInfoContext, IpInfoContext } from "./utils/context";
import { Provider } from "react-redux";
import Store from "./store/Store";
function App() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [ipInfo, setIpInfo] = useState({});
  const [user, setUser] = useState({});


  /////////////////// Validating Existing Token   ///////////////////////

  const token = localStorage.getItem('adminToken');
  // const ValidateToken = async () => {
  //   try {
  //     const response = await authClient.post('/validate-token');
  //     if (response.data.status) {
  //       navigate('/dashboard  ');
  //     }
  //   }
  //   catch (err) {
  //     localStorage.removeItem('adminToken');
  //     console.log(err);
  //     navigate('/');
  //   }
  //   finally {
  //     setLoader(false);
  //   }
  // }

  // const getIpInfo = async () => {
  //   try {
  //     const response = await authClient.get('http://ip-api.com/json');
  //     if (response.data) {
  //       setIpInfo(response?.data?.query);
  //     }
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   if (token) {
  //     ValidateToken();
  //     getIpInfo();
  //   }
  //   else {
  //     setLoader(false);
  //   }
  // }, []);

  return (
    <>
      <Provider store={Store}>
        <IpInfoContext.Provider value={{ ipInfo }}>
          <div id="layout-wrapper">
            <ToastContainer />
            {loader && <Loader />}
            {token && <Header />}
            {token && <Sidebar />}
            <LazyLoad />
            {token && <Footer />}
          </div>
        </IpInfoContext.Provider>
      </Provider>
    </>
  );
}

export default App;
