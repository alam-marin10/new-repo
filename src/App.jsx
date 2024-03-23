import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import MyState from "./context/data/MyState"
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Nopage from "./pages/nopage/Nopage";
import AddBooks from "./pages/admin/page/AddBooks";
import UpdateBooks from "./pages/admin/page/UpdateBooks";
import Request from "./pages/request/Request";
import BookInfo from "./pages/bookInfo/BookInfo";
import Allbooks from "./pages/allBooks/Allbooks";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={ 
          <ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="/request" element={
            <ProtectedRoutesForAdmin>
              <Request/>
            </ProtectedRoutesForAdmin>
          } />

<Route path="/allbooks" element={
            <ProtectedRoutes>
              <Allbooks/>
            </ProtectedRoutes>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/bookinfo" element={<BookInfo/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addbooks" element={
            <ProtectedRoutesForAdmin><AddBooks/></ProtectedRoutesForAdmin>} />
          <Route path="/updatebooks" element={
            <ProtectedRoutesForAdmin><UpdateBooks/></ProtectedRoutesForAdmin>} />
          <Route path="/*" element={<Nopage/>} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
//////////
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'admin10@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}