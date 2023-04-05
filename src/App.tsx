import AppRouter from './AppRouter';
import { useRecoilState } from "recoil";
import { theme } from "./atoms/atoms";

function App():JSX.Element {
  const [dark,setDark] = useRecoilState(theme);
  return (
    <div className={dark ? "App" : "App light"}>
      <AppRouter />
    </div>
  )
}

export default App
