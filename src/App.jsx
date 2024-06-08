import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";

const App = () => {


  return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	) 
  }
export default observer(App);
