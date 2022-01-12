import { useAuth } from "../../Providers/Auth";
import "./styles.css";
const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <div className="box">
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
};
export default Dashboard;
