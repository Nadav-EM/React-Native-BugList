import * as React from "react";
import NavigationStack from "./Navigation/NavigationStack";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

//console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
}
