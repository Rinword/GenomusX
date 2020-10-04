import RouterStore from "./RouterStore";
import { createStoresContext } from "./create-context";

export interface FStores {
  routing?: RouterStore;
}

const stores: FStores = { };

stores.routing = new RouterStore();

const { StoresProvider, useStores } = createStoresContext<typeof stores>();
export { StoresProvider, useStores };

export default stores;
