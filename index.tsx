import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import App from "./App";

const index = () => {
  return (
    <>
      <StatusBar />
      <App />
    </>
  );
};

registerRootComponent(index);
