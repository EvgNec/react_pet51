import Calc from "./Calc/Calc";
import UserMenu from "./UseContext/UserMenu";

export const App = () => {
  return (
    <div>
    <UserMenu/>
    <Calc startQty={5}/>
    </div>
  );
};
