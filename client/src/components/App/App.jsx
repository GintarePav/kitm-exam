import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "../Body/Header/Header";
import Registration from "../Auth/Registration/Registration";
import Login from "../Auth/Login/Login";
import AdminPanelSection from "../AdminPanel/AdminPanelSection/AdminPanelSection";
import AllLunchSection from "../PublicPanel/AllLunchSection/AllLunchSections";
import TodaysLunchSection from "../PublicPanel/TodaysLunchSection/TodaysLunchSections";
import OrdersSection from "../PublicPanel/OrdersSection/OrdersSections";
import Footer from "../Body/Footer/Footer";

const App = () => {
  const [userData, setUserData] = useState({
    userData: { user: {} },
    loggedIn: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/details`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({
            user: { ...response.data.user, id: response.data.user._id },
            loggedIn: true,
          });
        })
        .catch((error) => {
          console.error("User details error:", error);
        });
    }
  }, [userData.loggedIn, setUserData]);

  return (
    <div className="App">
      <Router>
        <main>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Login userData={userData} setUserData={setUserData} />}
            />
            <Route path="/register" element={<Registration />} />
            <Route path="/admin-panel" element={<AdminPanelSection />} />
            <Route path="/all-lunch" element={<AllLunchSection />} />
            <Route path="/todays-lunch" element={<TodaysLunchSection />} />
            <Route path="/orders" element={<OrdersSection />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
