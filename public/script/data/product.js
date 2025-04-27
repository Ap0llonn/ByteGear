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
    "price": 10999.99,
    "description": "Processeur serveur 40 cœurs/80 threads pour environnements critiques.",
    "category": "processeur",
    "brand": "Intel",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/xeon-platinum-8380.png"
  },

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