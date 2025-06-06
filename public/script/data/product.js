const products = [
  {
    "id": 1,
    "name": "Intel Core i7-13700K 5.4 GHz",
    "price": 387.99,
    "description": "Processeur 16 cœurs (8P+8E) pour station de travail et gaming haut de gamme.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13700k.png"
  },
  {
    "id": 2,
    "name": "Intel Core i9-13900K 5.8 GHz",
    "price": 589.99,
    "description": "Processeur 24 cœurs (8P+16E) pour performances extrêmes et overclocking.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13900k.png"
  },
  {
    "id": 3,
    "name": "Intel Core i5-13600K 5.1 GHz",
    "price": 319.99,
    "description": "Processeur 14 cœurs (6P+8E) équilibré pour gaming et productivité.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/13600k.png"
  },
  {
    "id": 4,
    "name": "Intel Core i7-12700K 5.0 GHz",
    "price": 349.99,
    "description": "Processeur 12 cœurs (8P+4E) idéal pour streaming et gaming intensif.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12700k.png"
  },
  {
    "id": 5,
    "name": "AMD Ryzen 9 7950X 5.7 GHz",
    "price": 699.99,
    "description": "Processeur 16 cœurs/32 threads pour stations de travail et création 3D.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-9-7950x.png"
  },
  {
    "id": 6,
    "name": "AMD Ryzen 7 7700X 5.4 GHz",
    "price": 349.99,
    "description": "Processeur 8 cœurs/16 threads performant pour gaming et multitâche.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-7-7700x.png"
  },
  {
    "id": 7,
    "name": "AMD Ryzen 5 7600X 5.3 GHz",
    "price": 229.99,
    "description": "Processeur 6 cœurs/12 threads pour gamers à budget moyen.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-7600x.png"
  },
  {
    "id": 8,
    "name": "AMD Ryzen Threadripper PRO 5975WX 4.5 GHz",
    "price": 2999.99,
    "description": "Processeur 32 cœurs/64 threads pour stations de travail professionnelles.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/threadripper-5975wx.png"
  },
  {
    "id": 9,
    "name": "AMD EPYC 7763 3.5 GHz",
    "price": 6999.99,
    "description": "Processeur serveur 64 cœurs/128 threads pour datacenters.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": false,
    "image": "./public/res/image/product-image/processor/epyc-7763.png"
  },
  {
    "id": 10,
    "name": "AMD Ryzen 9 5900X 4.8 GHz",
    "price": 449.99,
    "description": "Processeur 12 cœurs/24 threads pour gaming et création de contenu.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-9-5900x.png"
  },
  {
    "id": 11,
    "name": "Intel Core i7-11700K 5.0 GHz",
    "price": 399.99,
    "description": "Processeur 8 cœurs/16 threads pour gaming et productivité.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/11700k.png"
  },
  {
    "id": 12,
    "name": "AMD Ryzen 5 5600X 4.6 GHz",
    "price": 199.99,
    "description": "Processeur 6 cœurs/12 threads pour gamers et utilisateurs polyvalents.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-5600x.png"
  },
  {
    "id": 13,
    "name": "Intel Core i3-12100F 4.3 GHz",
    "price": 109.99,
    "description": "Processeur 4 cœurs/8 threads pour PC d'entrée de gamme.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12100f.png"
  },
  {
    "id": 14,
    "name": "AMD Ryzen 3 4100 3.8 GHz",
    "price": 79.99,
    "description": "Processeur 4 cœurs/8 threads économique pour bureautique.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-3-4100.png"
  },
  {
    "id": 15,
    "name": "AMD Ryzen 7 5800X3D 4.5 GHz",
    "price": 329.99,
    "description": "Processeur 8 cœurs/16 threads avec cache 3D pour gaming extrême.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-7-5800x3d.png"
  },
  {
    "id": 16,
    "name": "Intel Core i9-12900K 5.2 GHz",
    "price": 549.99,
    "description": "Processeur 16 cœurs (8P+8E) performant pour gaming et création.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/12900k.png"
  },
  {
    "id": 17,
    "name": "AMD Ryzen 5 3600 4.2 GHz",
    "price": 169.99,
    "description": "Processeur 6 cœurs/12 threads pour gaming et multitâche léger.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/ryzen-5-3600.png"
  },
  {
    "id": 18,
    "name": "Intel Pentium Gold G6600 4.2 GHz",
    "price": 59.99,
    "description": "Processeur 2 cœurs/4 threads pour PC d'entrée de gamme.",
    "category": "Processeur",
    "brand": "Intel",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/pentium-g6600.png"
  },
  {
    "id": 19,
    "name": "AMD Athlon 3000G 3.5 GHz",
    "price": 49.99,
    "description": "Processeur 2 cœurs/4 threads avec GPU intégré pour usage basique.",
    "category": "Processeur",
    "brand": "AMD",
    "inStock": true,
    "image": "./public/res/image/product-image/processor/athlon-3000g.png"
  },
  {
    "id": 20,
    "name": "Intel Xeon Platinum 8380 2.3 GHz",
    "price": 9999.99,
    "description": "Processeur serveur 40 cœurs/80 threads pour environnements critiques.",
    "category": "Processeur",
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
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-sup-x-rtx-4090.png"
  },
  {
    "id": 22,
    "name": "XFX Speedster MERC 319 AMD Radeon RX 7900 XTX 24G",
    "price": 999.00,
    "description": "GPU AMD 24 Go GDDR6 optimisé pour le gaming 4K.",
    "category": "Carte-graphique",
    "brand": "XFX",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/rx-7900-xtx.png"
  },
  {
    "id": 23,
    "name": "ASUS ROG Strix GeForce RTX 4080 OC Edition 16G",
    "price": 1199.99,
    "description": "Carte graphique 16 Go GDDR6X idéale pour le gaming 4K.",
    "category": "Carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/strix-rtx-4080.png"
  },
  {
    "id": 24,
    "name": "Sapphire Nitro+ AMD Radeon RX 7800 XT 16G",
    "price": 549.00,
    "description": "GPU AMD 16 Go GDDR6 parfait pour le 1440p.",
    "category": "Carte-graphique",
    "brand": "Sapphire",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/sapp-rx-7800-xt.png"
  },
  {
    "id": 25,
    "name": "Gigabyte AORUS GeForce RTX 4070 Ti MASTER 12G",
    "price": 799.99,
    "description": "GPU haut de gamme 12 Go GDDR6X pour 1440p et 4K.",
    "category": "Carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/aor-rtx-4070-ti.png"
  },

  {
    "id": 26,
    "name": "MSI GeForce GTX 1050 Ti GAMING X 4G",
    "price": 159.99,
    "description": "Carte graphique compacte idéale pour le 1080p léger.",
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-gtx-1050-ti-gaming-x.png"
  },
  {
    "id": 27,
    "name": "Gigabyte GeForce GTX 1060 G1 Gaming 6G",
    "price": 189.99,
    "description": "GPU milieu de gamme fiable pour le 1080p.",
    "category": "Carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-gtx-1060-g1.png"
  },
  {
    "id": 28,
    "name": "ASUS ROG Strix GeForce GTX 1070 Ti 8G",
    "price": 229.99,
    "description": "Bonne performance pour le 1080p élevé et le 1440p.",
    "category": "Carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-gtx-1070-ti-strix.png"
  },
  {
    "id": 29,
    "name": "EVGA GeForce GTX 1080 Ti FTW3 GAMING",
    "price": 269.99,
    "description": "Ancien haut de gamme toujours compétent en 1440p.",
    "category": "Carte-graphique",
    "brand": "EVGA",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/evga-gtx-1080-ti-ftw3.png"
  },
  {
    "id": 30,
    "name": "ZOTAC GeForce RTX 2060 AMP 6G",
    "price": 289.99,
    "description": "Première carte RTX avec ray tracing d'entrée de gamme.",
    "category": "Carte-graphique",
    "brand": "ZOTAC",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/zotac-rtx-2060-amp.png"
  },
  {
    "id": 31,
    "name": "MSI GeForce RTX 2070 SUPER GAMING X TRIO",
    "price": 399.99,
    "description": "GPU solide pour le 1440p fluide avec ray tracing.",
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-2070-super-gx.png"
  },
  {
    "id": 32,
    "name": "Gigabyte GeForce RTX 2080 WINDFORCE OC 8G",
    "price": 499.99,
    "description": "Bonne carte pour le gaming en 1440p ultra.",
    "category": "Carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-rtx-2080-windforce.png"
  },
  {
    "id": 33,
    "name": "ASUS TUF Gaming GeForce RTX 3060 Ti OC",
    "price": 429.99,
    "description": "GPU efficace pour le 1440p avec refroidissement robuste.",
    "category": "Carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-3060-ti-tuf.png"
  },
  {
    "id": 34,
    "name": "MSI Ventus 3X GeForce RTX 3070 8G OC",
    "price": 499.99,
    "description": "GPU performant pour le 1440p et début de 4K.",
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-3070-ventus3x.png"
  },
  {
    "id": 35,
    "name": "Gigabyte AORUS GeForce RTX 3080 Master 10G",
    "price": 649.99,
    "description": "Puissance brute pour le 4K avec refroidissement avancé.",
    "category": "Carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/aorus-rtx-3080-master.png"
  },
  {
    "id": 36,
    "name": "ASUS ROG Strix GeForce RTX 3090 OC 24G",
    "price": 1399.99,
    "description": "GPU extrême pour la 4K/8K, IA et création de contenu.",
    "category": "Carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-3090-strix.png"
  },
  {
    "id": 37,
    "name": "MSI Gaming X Trio GeForce RTX 4060 Ti 8G",
    "price": 399.99,
    "description": "Idéal pour 1080p ultra avec DLSS 3.",
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-4060ti-gxt.png"
  },
  {
    "id": 38,
    "name": "Gigabyte Gaming OC GeForce RTX 4070 12G",
    "price": 599.99,
    "description": "Excellente carte pour le 1440p fluide avec DLSS 3.",
    "category": "Carte-graphique",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/gigabyte-rtx-4070-gaming.png"
  },
  {
    "id": 39,
    "name": "ZOTAC GeForce RTX 4080 Trinity OC 16G",
    "price": 1199.99,
    "description": "Parfaite pour le 4K ultra avec refroidissement silencieux.",
    "category": "Carte-graphique",
    "brand": "ZOTAC",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/zotac-rtx-4080-trinity.png"
  },
  {
    "id": 40,
    "name": "ASUS ROG Strix GeForce RTX 4090 OC 24G",
    "price": 1799.99,
    "description": "Carte ultime pour 4K/8K, IA et rendu pro.",
    "category": "Carte-graphique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asus-rtx-4090-strix.png"
  },
  {
    "id": 41,
    "name": "XFX Speedster QICK 319 Radeon RX 6700 XT 12G",
    "price": 399.00,
    "description": "GPU AMD parfait pour le 1440p sans compromis.",
    "category": "Carte-graphique",
    "brand": "XFX",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/xfx-rx-6700xt.png"
  },
  {
    "id": 42,
    "name": "Sapphire Nitro+ Radeon RX 6800 XT 16G",
    "price": 549.00,
    "description": "Performance AMD pour 1440p et 4K compétitif.",
    "category": "Carte-graphique",
    "brand": "Sapphire",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/sapphire-rx-6800xt-nitro.png"
  },
  {
    "id": 43,
    "name": "PowerColor Red Devil Radeon RX 7900 XT 20G",
    "price": 749.00,
    "description": "Carte haut de gamme AMD avec design custom agressif.",
    "category": "Carte-graphique",
    "brand": "PowerColor",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/powercolor-rx-7900xt-reddevil.png"
  },
  {
    "id": 44,
    "name": "ASRock Phantom Gaming Radeon RX 7800 XT 16G",
    "price": 549.00,
    "description": "Bon équilibre pour le 1440p moderne avec RDNA 3.",
    "category": "Carte-graphique",
    "brand": "ASRock",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/asrock-rx-7800xt-phantom.png"
  },
  {
    "id": 45,
    "name": "MSI GeForce RTX 5090 SUPRIM X 24G",
    "price": 2099.99,
    "description": "GPU ultra-haut de gamme pour 4K/8K et IA avancée.",
    "category": "Carte-graphique",
    "brand": "MSI",
    "inStock": true,
    "image": "./public/res/image/product-image/gpu/msi-rtx-5090-suprimx.png"
  },
  {
    "id": 46,
    "name": "Seagate BarraCuda 2TB 7200RPM",
    "price": 59.99,
    "description": "Disque dur 3.5'' fiable pour le stockage général.",
    "category": "Stockage",
    "brand": "Seagate",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/seagate-barracuda-2tb.png"
  },
  {
    "id": 47,
    "name": "Western Digital Blue 4TB 5400RPM",
    "price": 84.99,
    "description": "Stockage haute capacité pour les sauvegardes et médias.",
    "category": "Stockage",
    "brand": "Western Digital",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/wd-blue-4tb.png"
  },
  {
    "id": 48,
    "name": "Toshiba P300 1TB 7200RPM",
    "price": 47.99,
    "description": "Disque dur performant pour PC de bureau.",
    "category": "Stockage",
    "brand": "Toshiba",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/toshiba-p300-1tb.png"
  },
  {
    "id": 49,
    "name": "Samsung 870 EVO 1TB",
    "price": 99.99,
    "description": "SSD SATA très fiable pour une utilisation quotidienne.",
    "category": "Stockage",
    "brand": "Samsung",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/samsung-870-evo-1tb.png"
  },
  {
    "id": 50,
    "name": "Crucial MX500 500GB",
    "price": 54.99,
    "description": "Excellent rapport qualité-prix pour booster un PC.",
    "category": "Stockage",
    "brand": "Crucial",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/crucial-mx500-500gb.png"
  },
  {
    "id": 51,
    "name": "Kingston A400 240GB",
    "price": 29.99,
    "description": "SSD abordable pour les systèmes basiques.",
    "category": "Stockage",
    "brand": "Kingston",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/kingston-a400-240gb.png"
  },
  {
    "id": 52,
    "name": "ADATA SU800 1TB",
    "price": 89.99,
    "description": "SSD performant avec support DRAM cache.",
    "category": "Stockage",
    "brand": "ADATA",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/adata-su800-1tb.png"
  },
  {
    "id": 53,
    "name": "Samsung 980 PRO 1TB NVMe Gen4",
    "price": 129.99,
    "description": "SSD ultra rapide pour gamers et pros.",
    "category": "Stockage",
    "brand": "Samsung",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/samsung-980pro-1tb.png"
  },
  {
    "id": 54,
    "name": "WD Black SN770 1TB Gen4",
    "price": 114.99,
    "description": "SSD gaming avec hautes vitesses de lecture/écriture.",
    "category": "Stockage",
    "brand": "Western Digital",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/wd-sn770-1tb.png"
  },
  {
    "id": 55,
    "name": "Crucial P5 Plus 2TB Gen4",
    "price": 169.99,
    "description": "Stockage NVMe rapide avec chiffrement matériel.",
    "category": "Stockage",
    "brand": "Crucial",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/crucial-p5plus-2tb.png"
  },
  {
    "id": 56,
    "name": "Kingston KC3000 1TB Gen4",
    "price": 124.99,
    "description": "SSD haute performance pour stations de travail.",
    "category": "Stockage",
    "brand": "Kingston",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/kingston-kc3000-1tb.png"
  },
  {
    "id": 57,
    "name": "Sabrent Rocket Q 4TB Gen3",
    "price": 279.99,
    "description": "Haute capacité avec de bonnes performances NVMe.",
    "category": "Stockage",
    "brand": "Sabrent",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/sabrent-rocketq-4tb.png"
  },
  {
    "id": 58,
    "name": "ADATA XPG GAMMIX S70 Blade 2TB",
    "price": 159.99,
    "description": "SSD Gen4 compatible PS5 avec dissipateur inclus.",
    "category": "Stockage",
    "brand": "ADATA",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/xpg-s70-2tb.png"
  },
  {
    "id": 59,
    "name": "Corsair MP600 PRO XT 2TB",
    "price": 189.99,
    "description": "SSD NVMe Gen4 avec dissipateur thermique intégré.",
    "category": "Stockage",
    "brand": "Corsair",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/corsair-mp600-xt-2tb.png"
  },
  {
    "id": 60,
    "name": "Gigabyte AORUS Gen4 7000s 1TB",
    "price": 139.99,
    "description": "SSD haut débit avec large dissipateur passif.",
    "category": "Stockage",
    "brand": "Gigabyte",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/aorus-7000s-1tb.png"
  },
  {
    "id": 61,
    "name": "Lexar NM800 PRO 1TB Gen4",
    "price": 119.99,
    "description": "Excellent rapport prix/performances en PCIe 4.0.",
    "category": "Stockage",
    "brand": "Lexar",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/lexar-nm800pro-1tb.png"
  },
  {
    "id": 62,
    "name": "Patriot Viper VP4300 2TB Gen4",
    "price": 179.99,
    "description": "SSD performant avec dissipateur en graphène.",
    "category": "Stockage",
    "brand": "Patriot",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/patriot-vp4300-2tb.png"
  },
  {
    "id": 63,
    "name": "PNY CS900 1TB SATA SSD",
    "price": 69.99,
    "description": "Solution de mise à niveau simple et efficace.",
    "category": "Stockage",
    "brand": "PNY",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/pny-cs900-1tb.png"
  },
  {
    "id": 64,
    "name": "TeamGroup MP34 512GB NVMe Gen3",
    "price": 39.99,
    "description": "Bon choix pour une configuration économique.",
    "category": "Stockage",
    "brand": "TeamGroup",
    "inStock": true,
    "image": "./public/res/image/product-image/storage/teamgroup-mp34-512gb.png"
  },
  // RAM
  {
    "id": 65,
    "name": "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
    "price": 54.99,
    "description": "RAM performante et fiable pour gamers et créateurs.",
    "category": "Ram",
    "brand": "Corsair",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/corsair-vengeance-ddr4-3200.png"
  },
  {
    "id": 66,
    "name": "G.Skill Ripjaws V 32GB (2x16GB) DDR4 3600MHz",
    "price": 84.99,
    "description": "Excellente performance pour les tâches exigeantes.",
    "category": "Ram",
    "brand": "G.Skill",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/gskill-ripjaws-ddr4-3600.png"
  },
  {
    "id": 67,
    "name": "Kingston HyperX Fury 16GB (1x16GB) DDR4 2666MHz",
    "price": 42.99,
    "description": "Bon choix pour les configurations économiques.",
    "category": "Ram",
    "brand": "Kingston",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/kingston-hyperx-ddr4-2666.png"
  },
  {
    "id": 68,
    "name": "Patriot Viper 4 16GB (2x8GB) DDR4 3000MHz",
    "price": 49.99,
    "description": "Mémoire fiable avec dissipateur thermique.",
    "category": "Ram",
    "brand": "Patriot",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/patriot-viper-ddr4-3000.png"
  },
  {
    "id": 69,
    "name": "Team T-Force Delta RGB 32GB (2x16GB) DDR4 3200MHz",
    "price": 74.99,
    "description": "RGB stylé avec bonnes performances.",
    "category": "Ram",
    "brand": "TeamGroup",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/teamgroup-delta-ddr4-3200.png"
  },
  {
    "id": 70,
    "name": "ADATA XPG Gammix D10 16GB DDR4 3200MHz",
    "price": 44.99,
    "description": "Conçu pour les gamers au budget serré.",
    "category": "Ram",
    "brand": "ADATA",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/adata-gammix-ddr4-3200.png"
  },
  {
    "id": 71,
    "name": "Silicon Power 8GB DDR4 2400MHz",
    "price": 24.99,
    "description": "Barrette simple pour usage bureautique.",
    "category": "Ram",
    "brand": "Silicon Power",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/siliconpower-ddr4-2400.png"
  },
  {
    "id": 72,
    "name": "Crucial Ballistix 16GB (2x8GB) DDR4 3200MHz",
    "price": 59.99,
    "description": "Idéal pour jeux et multitâche.",
    "category": "Ram",
    "brand": "Crucial",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/crucial-ballistix-ddr4-3200.png"
  },

  {
    "id": 73,
    "name": "Corsair Dominator Platinum RGB 32GB DDR5 6000MHz",
    "price": 169.99,
    "description": "RAM haut de gamme avec RGB et haute fréquence.",
    "category": "Ram",
    "brand": "Corsair",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/corsair-dominator-ddr5-6000.png"
  },
  {
    "id": 74,
    "name": "Kingston Fury Beast 32GB (2x16GB) DDR5 5600MHz",
    "price": 119.99,
    "description": "RAM DDR5 rapide pour les PC récents.",
    "category": "Ram",
    "brand": "Kingston",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/kingston-fury-ddr5-5600.png"
  },
  {
    "id": 75,
    "name": "ADATA XPG Lancer 32GB DDR5 6000MHz",
    "price": 129.99,
    "description": "Mémoire DDR5 performante pour les gamers.",
    "category": "Ram",
    "brand": "ADATA",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/adata-lancer-ddr5-6000.png"
  },
  {
    "id": 76,
    "name": "G.Skill Trident Z5 RGB 32GB DDR5 6400MHz",
    "price": 189.99,
    "description": "Ultra haute fréquence avec éclairage RGB.",
    "category": "Ram",
    "brand": "G.Skill",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/gskill-tridentz-ddr5-6400.png"
  },
  {
    "id": 77,
    "name": "Patriot Viper Venom 32GB DDR5 5600MHz",
    "price": 109.99,
    "description": "Compatible avec les cartes mères DDR5.",
    "category": "Ram",
    "brand": "Patriot",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/patriot-venom-ddr5-5600.png"
  },
  {
    "id": 78,
    "name": "PNY XLR8 Gaming 32GB DDR5 6000MHz",
    "price": 119.99,
    "description": "Solution gaming DDR5 performante.",
    "category": "Ram",
    "brand": "PNY",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/pny-xlr8-ddr5-6000.png"
  },
  {
    "id": 79,
    "name": "Lexar ARES 32GB (2x16GB) DDR5 6000MHz",
    "price": 124.99,
    "description": "Design épuré, haute performance.",
    "category": "Ram",
    "brand": "Lexar",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/lexar-ares-ddr5-6000.png"
  },
  {
    "id": 80,
    "name": "TeamGroup T-Force Delta RGB DDR5 6400MHz",
    "price": 144.99,
    "description": "RGB stylé avec haute fréquence DDR5.",
    "category": "Ram",
    "brand": "TeamGroup",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/teamgroup-delta-ddr5-6400.png"
  },

  {
    "id": 81,
    "name": "Crucial ECC Registered 32GB DDR4 2666MHz",
    "price": 114.99,
    "description": "RAM ECC pour serveurs et stations de travail.",
    "category": "Ram",
    "brand": "Crucial",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/crucial-ecc-ddr4-2666.png"
  },
  {
    "id": 82,
    "name": "Samsung 16GB DDR5 ECC Registered 4800MHz",
    "price": 139.99,
    "description": "Module ECC DDR5 fiable pour les systèmes critiques.",
    "category": "Ram",
    "brand": "Samsung",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/samsung-ecc-ddr5-4800.png"
  },
  {
    "id": 83,
    "name": "Kingston Server Premier ECC 16GB DDR4 3200MHz",
    "price": 99.99,
    "description": "Optimisé pour les plateformes serveurs.",
    "category": "Ram",
    "brand": "Kingston",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/kingston-serverpremier-ddr4-3200.png"
  },
  {
    "id": 84,
    "name": "Micron ECC Registered 32GB DDR5 5600MHz",
    "price": 149.99,
    "description": "Module ECC DDR5 pour les serveurs avancés.",
    "category": "Ram",
    "brand": "Micron",
    "inStock": true,
    "image": "./public/res/image/product-image/ram/micron-ecc-ddr5-5600.png"
  },

  // Périphériques
  {
    "id": 85,
    "name": "Logitech G502 Hero",
    "price": 261.79,
    "description": "Souris gaming avec capteur haute précision.",
    "category": "Peripherique",
    "brand": "Logitech",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/logitech-g502.png"
  },
  {
    "id": 86,
    "name": "Razer DeathAdder V2",
    "price": 299.34,
    "description": "Souris gaming avec capteur haute précision.",
    "category": "Peripherique",
    "brand": "Razer",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/razer-deathadder-v2.png"
  },
  {
    "id": 87,
    "name": "Corsair Harpoon RGB",
    "price": 69.05,
    "description": "Souris gaming avec capteur haute précision.",
    "category": "Peripherique",
    "brand": "Corsair",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/corsair-harpoon.png"
  },
  {
    "id": 88,
    "name": "SteelSeries Rival 5",
    "price": 180.48,
    "description": "Souris gaming avec capteur haute précision.",
    "category": "Peripherique",
    "brand": "SteelSeries",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/steelseries-rival5.png"
  },
  {
    "id": 89,
    "name": "Glorious Model O",
    "price": 42.09,
    "description": "Souris gaming avec capteur haute précision.",
    "category": "Peripherique",
    "brand": "Glorious",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/glorious-model-o.png"
  },
  {
    "id": 90,
    "name": "Corsair K95 RGB Platinum",
    "price": 138.22,
    "description": "Clavier mécanique rétroéclairé pour gamers.",
    "category": "Peripherique",
    "brand": "Corsair",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/corsair-k95.png"
  },
  {
    "id": 91,
    "name": "Logitech G915 TKL",
    "price": 98.63,
    "description": "Clavier mécanique rétroéclairé pour gamers.",
    "category": "Peripherique",
    "brand": "Logitech",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/logitech-g915.png"
  },
  {
    "id": 92,
    "name": "Razer Huntsman Mini",
    "price": 158.91,
    "description": "Clavier mécanique rétroéclairé pour gamers.",
    "category": "Peripherique",
    "brand": "Razer",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/razer-huntsman.png"
  },
  {
    "id": 93,
    "name": "Ducky One 2 Mini",
    "price": 172.66,
    "description": "Clavier mécanique rétroéclairé pour gamers.",
    "category": "Peripherique",
    "brand": "Ducky",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/ducky-one2mini.png"
  },
  {
    "id": 94,
    "name": "HyperX Alloy FPS",
    "price": 104.78,
    "description": "Clavier mécanique rétroéclairé pour gamers.",
    "category": "Peripherique",
    "brand": "HyperX",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/hyperx-alloyfps.png"
  },
  {
    "id": 95,
    "name": "ASUS TUF VG27AQ",
    "price": 290.99,
    "description": "Écran haute résolution pour une immersion totale.",
    "category": "Peripherique",
    "brand": "ASUS",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/asus-vg27aq.png"
  },
  {
    "id": 96,
    "name": "Acer Predator XB271HU",
    "price": 286.74,
    "description": "Écran haute résolution pour une immersion totale.",
    "category": "Peripherique",
    "brand": "Acer",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/acer-xb271hu.png"
  },
  {
    "id": 97,
    "name": "Dell UltraSharp U2723QE",
    "price": 237.61,
    "description": "Écran haute résolution pour une immersion totale.",
    "category": "Peripherique",
    "brand": "Dell",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/dell-u2723qe.png"
  },
  {
    "id": 98,
    "name": "LG UltraGear 27GP850-B",
    "price": 142.31,
    "description": "Écran haute résolution pour une immersion totale.",
    "category": "Peripherique",
    "brand": "LG",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/lg-27gp850b.png"
  },
  {
    "id": 99,
    "name": "Samsung Odyssey G7",
    "price": 106.87,
    "description": "Écran haute résolution pour une immersion totale.",
    "category": "Peripherique",
    "brand": "Samsung",
    "inStock": true,
    "image": "./public/res/image/product-image/peripherals/samsung-g7.png"
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

export function getProductPriceASC(products) {
  let sortedProducts = [...products];

  for (let i = 0; i < sortedProducts.length - 1; i++) {
    for (let j = 0; j < sortedProducts.length - 1 - i; j++) {
      if (sortedProducts[j].price > sortedProducts[j + 1].price) {
        const temp = sortedProducts[j];
        sortedProducts[j] = sortedProducts[j + 1];
        sortedProducts[j + 1] = temp;
      }
    }
  }

  return sortedProducts;
}

export function getProductNameASC(result) {
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i].name.localeCompare(result[j].name) > 0) {

        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
}

export function getProductPriceRange(products, minPrice, maxPrice) {
  let sortedProducts = [...products];

  for (let i = 0; i < sortedProducts.length - 1; i++) {
    if (sortedProducts[i].price < minPrice || sortedProducts[i].price > maxPrice) {
      sortedProducts.splice(i, 1);
      i--;
    }
  }

  return sortedProducts;
}

export function getOutOfStockProducts(products) {
  let outOfStockProducts = [];

  for (const product of products) {
    if (!product.inStock) {
      outOfStockProducts.push(product);
    }
  }

  return outOfStockProducts;
}

export function getStockProducts(products) {
  let getStockProducts = [];

  for (const product of products) {
    if (product.inStock) {
      getStockProducts.push(product);
    }
  }
  
  return getStockProducts;
}


export function getProductByBrand(products ,brand) {

  let filteredProducts = [];
  for (const product of products) {
    if (product.brand === brand) {
      filteredProducts.push(product);
    }
  }

  return filteredProducts;

}

export function getProducts() {
  return products;
}