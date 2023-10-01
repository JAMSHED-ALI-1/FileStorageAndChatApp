import React from "react";
import Navigators from "./src/navigation/Navigators";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Navigators />
    </>
  );
};

export default App;
