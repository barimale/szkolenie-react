import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Home, { Customer } from "./components/Home";
import SignUp from "./components/SignUp";
import CustomerDetails from "./components/CustomerDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "./store/userSlice";
import NewCustomer from "./components/NewCustomer";
import EditCustomer from "./components/EditCustomer";
import CreateAction from "./components/CreateAction";
import EditAction from "./components/EditAction";

function App() {
  const [editCustomer, setEditCustomer] = useState<Customer>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state: any) => state.user);
  
  useEffect(()=>{
    dispatch(setUser(JSON.parse(localStorage.getItem('user') || 'null')))
  }, [])

  useEffect(()=>{
    if(editCustomer)
    {
      navigate('/customers/edit')
    }
  }, [editCustomer])

  

  return (
    <>
      <header style={{ width: "100%" }}>
        <h4>Witaj! Jesteś zalogowany jako {userState.user?.name} test</h4>
      </header>
      <Routes>
        <Route index element={<Home onEdit={(item: Customer) => setEditCustomer(item)}/>} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="customers/:id" element={<CustomerDetails />} />
        <Route path="customers/:id/action/new" element={<CreateAction />} />
        <Route path="customers/:id/action/:actionId" element={<EditAction />} />
        <Route path="customers/new" element={<NewCustomer />} />
        <Route path="customers/edit" element={<EditCustomer customer= {editCustomer} />} />
      </Routes>
      <footer>
        <h4>Footer</h4>
      </footer>
    </>
  );
}

export default App;
