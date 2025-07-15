import Calc from "./Calc/Calc";
import Player from "./Player/Player";
import UserMenu from "./UseContext/UserMenu";

export const App = () => {
  return (
    <div>
    <UserMenu/>
    <Calc startQty={5}/>
    <Player source="<http://media.w3.org/010/05/sintel/trailer.mp4>" /> 
    </div>
  );
};
