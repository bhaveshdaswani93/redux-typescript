import { Provider } from "react-redux";
import { store } from "../store";
import RepositoriesList from "./repositories-list";



const App = () => {
  return <Provider store={store}>
      <div>
          Search Packages
      </div>
      <RepositoriesList />
  </Provider>
  
  
}

export default App;