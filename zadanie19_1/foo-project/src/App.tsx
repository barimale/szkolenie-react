import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CustomerDetails from "./components/CustomerDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./store/userSlice";
import NewCustomer from "./components/NewCustomer";

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  
  useEffect(()=>{
    dispatch(setUser(JSON.parse(localStorage.getItem('user') || 'null')))
  }, [])

  return (
    <>
      <header style={{ width: "100%" }}>
        <h1>Jesteś zalogowany jako {userState.user?.name} test</h1>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="customers/:id" element={<CustomerDetails />} />
        <Route path="customers/new" element={<NewCustomer />} />
      </Routes>
      <footer>
        <h4>Footer</h4>
      </footer>
    </>
  );
}

export default App;
