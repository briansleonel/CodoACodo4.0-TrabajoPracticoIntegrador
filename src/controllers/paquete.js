import localforage from "localforage";

export async function getPaquetes() {
    fakeNetwork();
    let paquetes = await localforage.getItem("paquetes");
    return paquetes;
}

export async function updatePaquetes(paquetesUpdate) {
    fakeNetwork()
    try {
        await set(paquetesUpdate);
        return true;
    } catch (error) {
        return false;
    }
}

export async function getPaquete(id) {
    fakeNetwork();
    let paquetes = await getPaquetes();
    let paquete = paquetes.find(p => p.id == id);
    return paquete ?? null;
}

function set(paquetes) {
  return localforage.setItem("paquetes", paquetes);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}