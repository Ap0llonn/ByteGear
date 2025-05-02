const products = [

  {
    "id": 1,
    "name": "Intel Core i7-13700K 5.4 GHz",
    "price": 387.99,
    "description": "Processeur 16 cœurs (8P+8E) pour station de travail et gaming haut de gamme.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13700k.png"
  },
  {
    "id": 2,
    "name": "Intel Core i9-13900K 5.8 GHz",
    "price": 589.99,
    "description": "Processeur 24 cœurs (8P+16E) pour performances extrêmes et overclocking.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13900k.png"
  },
  {
    "id": 3,
    "name": "Intel Core i5-13600K 5.1 GHz",
    "price": 319.99,
    "description": "Processeur 14 cœurs (6P+8E) équilibré pour gaming et productivité.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13600k.png"
  },
  {
    "id": 4,
    "name": "Intel Core i7-12700K 5.0 GHz",
    "price": 349.99,
    "description": "Processeur 12 cœurs (8P+4E) idéal pour streaming et gaming intensif.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12700k.png"
  },
  {
    "id": 5,
    "name": "AMD Ryzen 9 7950X 5.7 GHz",
    "price": 699.99,
    "description": "Processeur 16 cœurs/32 threads pour stations de travail et création 3D.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-9-7950x.png"
  },
  {
    "id": 6,
    "name": "AMD Ryzen 7 7700X 5.4 GHz",
    "price": 349.99,
    "description": "Processeur 8 cœurs/16 threads performant pour gaming et multitâche.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-7-7700x.png"
  },
  {
    "id": 7,
    "name": "AMD Ryzen 5 7600X 5.3 GHz",
    "price": 229.99,
    "description": "Processeur 6 cœurs/12 threads pour gamers à budget moyen.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-7600x.png"
  },
  {
    "id": 8,
    "name": "AMD Ryzen Threadripper PRO 5975WX 4.5 GHz",
    "price": 2999.99,
    "description": "Processeur 32 cœurs/64 threads pour stations de travail professionnelles.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/threadripper-5975wx.png"
  },
  {
    "id": 9,
    "name": "AMD EPYC 7763 3.5 GHz",
    "price": 6999.99,
    "description": "Processeur serveur 64 cœurs/128 threads pour datacenters.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/epyc-7763.png"
  },
  {
    "id": 10,
    "name": "AMD Ryzen 9 5900X 4.8 GHz",
    "price": 449.99,
    "description": "Processeur 12 cœurs/24 threads pour gaming et création de contenu.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-9-5900x.png"
  },
  {
    "id": 11,
    "name": "Intel Core i7-11700K 5.0 GHz",
    "price": 399.99,
    "description": "Processeur 8 cœurs/16 threads pour gaming et productivité.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/11700k.png"
  },
  {
    "id": 12,
    "name": "AMD Ryzen 5 5600X 4.6 GHz",
    "price": 199.99,
    "description": "Processeur 6 cœurs/12 threads pour gamers et utilisateurs polyvalents.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-5600x.png"
  },
  {
    "id": 13,
    "name": "Intel Core i3-12100F 4.3 GHz",
    "price": 109.99,
    "description": "Processeur 4 cœurs/8 threads pour PC d'entrée de gamme.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12100f.png"
  },
  {
    "id": 14,
    "name": "AMD Ryzen 3 4100 3.8 GHz",
    "price": 79.99,
    "description": "Processeur 4 cœurs/8 threads économique pour bureautique.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-3-4100.png"
  },
  {
    "id": 15,
    "name": "AMD Ryzen 7 5800X3D 4.5 GHz",
    "price": 329.99,
    "description": "Processeur 8 cœurs/16 threads avec cache 3D pour gaming extrême.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-7-5800x3d.png"
  },
  {
    "id": 16,
    "name": "Intel Core i9-12900K 5.2 GHz",
    "price": 549.99,
    "description": "Processeur 16 cœurs (8P+8E) performant pour gaming et création.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12900k.png"
  },
  {
    "id": 17,
    "name": "AMD Ryzen 5 3600 4.2 GHz",
    "price": 169.99,
    "description": "Processeur 6 cœurs/12 threads pour gaming et multitâche léger.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-3600.png"
  },
  {
    "id": 18,
    "name": "Intel Pentium Gold G6600 4.2 GHz",
    "price": 59.99,
    "description": "Processeur 2 cœurs/4 threads pour PC d'entrée de gamme.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/pentium-g6600.png"
  },
  {
    "id": 19,
    "name": "AMD Athlon 3000G 3.5 GHz",
    "price": 49.99,
    "description": "Processeur 2 cœurs/4 threads avec GPU intégré pour usage basique.",
    "category": "processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/athlon-3000g.png"
  },
  {
    "id": 20,
    "name": "Intel Xeon Platinum 8380 2.3 GHz",
    "price": 9999.99,
    "description": "Processeur serveur 40 cœurs/80 threads pour environnements critiques.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/xeon-platinum-8380.png"
  },

  // Carte Graphique
  {
    "id": 21,
    "name": "MSI GeForce RTX 4090 Suprim X 24G",
    "price": 1599.99,
    "description": "GPU ultra-haut de gamme avec 24 Go GDDR6X pour ray-tracing et IA.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-sup-x-rtx-4090.png"
  },
  {
    "id": 22,
    "name": "XFX Speedster MERC 319 AMD Radeon RX 7900 XTX 24G",
    "price": 999.00,
    "description": "GPU AMD 24 Go GDDR6 optimisé pour le gaming 4K.",
    "category": "carte-graphique",
    "brand": "XFX",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/rx-7900-xtx.png"
  },
  {
    "id": 23,
    "name": "ASUS ROG Strix GeForce RTX 4080 OC Edition 16G",
    "price": 1199.99,
    "description": "Carte graphique 16 Go GDDR6X idéale pour le gaming 4K.",
    "category": "carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/strix-rtx-4080.png"
  },
  {
    "id": 24,
    "name": "Sapphire Nitro+ AMD Radeon RX 7800 XT 16G",
    "price": 549.00,
    "description": "GPU AMD 16 Go GDDR6 parfait pour le 1440p.",
    "category": "carte-graphique",
    "brand": "Sapphire",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/sapp-rx-7800-xt.png"
  },
  {
    "id": 25,
    "name": "Gigabyte AORUS GeForce RTX 4070 Ti MASTER 12G",
    "price": 799.99,
    "description": "GPU haut de gamme 12 Go GDDR6X pour 1440p et 4K.",
    "category": "carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/aor-rtx-4070-ti.png"
  },

  {
    "id": 26,
    "name": "MSI GeForce GTX 1050 Ti GAMING X 4G",
    "price": 159.99,
    "description": "Carte graphique compacte idéale pour le 1080p léger.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-gtx-1050-ti-gaming-x.png"
  },
  {
    "id": 27,
    "name": "Gigabyte GeForce GTX 1060 G1 Gaming 6G",
    "price": 189.99,
    "description": "GPU milieu de gamme fiable pour le 1080p.",
    "category": "carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-gtx-1060-g1.png"
  },
  {
    "id": 28,
    "name": "ASUS ROG Strix GeForce GTX 1070 Ti 8G",
    "price": 229.99,
    "description": "Bonne performance pour le 1080p élevé et le 1440p.",
    "category": "carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-gtx-1070-ti-strix.png"
  },
  {
    "id": 29,
    "name": "EVGA GeForce GTX 1080 Ti FTW3 GAMING",
    "price": 269.99,
    "description": "Ancien haut de gamme toujours compétent en 1440p.",
    "category": "carte-graphique",
    "brand": "EVGA",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/evga-gtx-1080-ti-ftw3.png"
  },
  {
    "id": 30,
    "name": "ZOTAC GeForce RTX 2060 AMP 6G",
    "price": 289.99,
    "description": "Première carte RTX avec ray tracing d'entrée de gamme.",
    "category": "carte-graphique",
    "brand": "ZOTAC",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/zotac-rtx-2060-amp.png"
  },
  {
    "id": 31,
    "name": "MSI GeForce RTX 2070 SUPER GAMING X TRIO",
    "price": 399.99,
    "description": "GPU solide pour le 1440p fluide avec ray tracing.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-2070-super-gx.png"
  },
  {
    "id": 32,
    "name": "Gigabyte GeForce RTX 2080 WINDFORCE OC 8G",
    "price": 499.99,
    "description": "Bonne carte pour le gaming en 1440p ultra.",
    "category": "carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-rtx-2080-windforce.png"
  },
  {
    "id": 33,
    "name": "ASUS TUF Gaming GeForce RTX 3060 Ti OC",
    "price": 429.99,
    "description": "GPU efficace pour le 1440p avec refroidissement robuste.",
    "category": "carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-3060-ti-tuf.png"
  },
  {
    "id": 34,
    "name": "MSI Ventus 3X GeForce RTX 3070 8G OC",
    "price": 499.99,
    "description": "GPU performant pour le 1440p et début de 4K.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-3070-ventus3x.png"
  },
  {
    "id": 35,
    "name": "Gigabyte AORUS GeForce RTX 3080 Master 10G",
    "price": 649.99,
    "description": "Puissance brute pour le 4K avec refroidissement avancé.",
    "category": "carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/aorus-rtx-3080-master.png"
  },
  {
    "id": 36,
    "name": "ASUS ROG Strix GeForce RTX 3090 OC 24G",
    "price": 1399.99,
    "description": "GPU extrême pour la 4K/8K, IA et création de contenu.",
    "category": "carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-3090-strix.png"
  },
  {
    "id": 37,
    "name": "MSI Gaming X Trio GeForce RTX 4060 Ti 8G",
    "price": 399.99,
    "description": "Idéal pour 1080p ultra avec DLSS 3.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-4060ti-gxt.png"
  },
  {
    "id": 38,
    "name": "Gigabyte Gaming OC GeForce RTX 4070 12G",
    "price": 599.99,
    "description": "Excellente carte pour le 1440p fluide avec DLSS 3.",
    "category": "carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-rtx-4070-gaming.png"
  },
  {
    "id": 39,
    "name": "ZOTAC GeForce RTX 4080 Trinity OC 16G",
    "price": 1199.99,
    "description": "Parfaite pour le 4K ultra avec refroidissement silencieux.",
    "category": "carte-graphique",
    "brand": "ZOTAC",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/zotac-rtx-4080-trinity.png"
  },
  {
    "id": 40,
    "name": "ASUS ROG Strix GeForce RTX 4090 OC 24G",
    "price": 1799.99,
    "description": "Carte ultime pour 4K/8K, IA et rendu pro.",
    "category": "carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-4090-strix.png"
  },
  {
    "id": 41,
    "name": "XFX Speedster QICK 319 Radeon RX 6700 XT 12G",
    "price": 399.00,
    "description": "GPU AMD parfait pour le 1440p sans compromis.",
    "category": "carte-graphique",
    "brand": "XFX",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/xfx-rx-6700xt.png"
  },
  {
    "id": 42,
    "name": "Sapphire Nitro+ Radeon RX 6800 XT 16G",
    "price": 549.00,
    "description": "Performance AMD pour 1440p et 4K compétitif.",
    "category": "carte-graphique",
    "brand": "Sapphire",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/sapphire-rx-6800xt-nitro.png"
  },
  {
    "id": 43,
    "name": "PowerColor Red Devil Radeon RX 7900 XT 20G",
    "price": 749.00,
    "description": "Carte haut de gamme AMD avec design custom agressif.",
    "category": "carte-graphique",
    "brand": "PowerColor",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/powercolor-rx-7900xt-reddevil.png"
  },
  {
    "id": 44,
    "name": "ASRock Phantom Gaming Radeon RX 7800 XT 16G",
    "price": 549.00,
    "description": "Bon équilibre pour le 1440p moderne avec RDNA 3.",
    "category": "carte-graphique",
    "brand": "ASRock",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asrock-rx-7800xt-phantom.png"
  },
  {
    "id": 45,
    "name": "MSI GeForce RTX 5090 SUPRIM X 24G",
    "price": 2099.99,
    "description": "Futur GPU ultra-haut de gamme pour 4K/8K et IA avancée.",
    "category": "carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-5090-suprimx.png"
  }

];

export function getRandomProduct(numberOfProducts) {

  let randomProducts = [];

  for (let i = 0; i < numberOfProducts; i++) {
    const randomIndex = Math.floor(Math.random() * products.length);
    randomProducts[i] = products[randomIndex];
  }

  return randomProducts;
}

export function getProducts() {
  return products;
}