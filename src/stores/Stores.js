import { RouterStore } from "mobx-react-router";

const routingStore = new RouterStore();

console.log("enviroment",process.env.NODE_ENV);

const stores = {
  routingStore
};

export default stores;
