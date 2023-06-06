import { Provider } from "react-redux";
import TuitList from "./tuits/tuit-list";
import store from "./tuits/tuit-store";
import WhatsHappening from "./whats-happening";

function HomeScreen(){
    return(
        <Provider store={store}>
            <div>
            <h1>Home</h1>
            <WhatsHappening />
            <TuitList />
            </div>
        </Provider>
    );
}

export default HomeScreen;