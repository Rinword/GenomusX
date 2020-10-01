import RouterStore from "./RouterStore";

export interface FStores {
  routing?: RouterStore;
}

const stores: FStores = { };

stores.routing = new RouterStore();

export default stores;
