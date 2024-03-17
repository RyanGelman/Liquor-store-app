import React, { useState } from 'react';
import './Products.css';

// Updated products array with category
const products = [
  // Tequila
  
  {
    name: 'Don Julio 1942',
    category: "Tequila",
    description: `A luxurious tequila, aged for 2.5 years, known for its rich caramel and chocolate notes.`,
    imageUrl: 'https://cdn11.bigcommerce.com/s-gr83s/images/stencil/1280x1280/products/3015/7527/9__42216.1567183822.jpg?c=2'
  },
  {
    name: "Don Julio 1942 Ultima Reserva",
    category: "Tequila",
    description: "An exclusive, limited-edition tequila, offering a unique blend of aged reserves with a smooth, oak and vanilla finish.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/9/99989_don-julio-ultima-reserva-extra-anejo-075l-40-vol.jpg'
  },
  {
    name: "Don Julio Primavera",
    category: "Tequila",
    description: "A refreshing tequila, aged in orange wine casks for a light, citrus-infused flavor profile.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-k0y7xl9dpv/images/stencil/1280x1280/products/33746/38911/118861__21649.1646782923.jpg?c=1'
  },
  {
    name: "Don Julio Anejo",
    category: "Tequila",
    description: "Aged for 18 months, this tequila has a robust flavor with hints of chocolate, cinnamon, and spice.",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOzimQ6kmEZBSsIpndVOM8bheQH3cOx9wPYbJ3whu9xRMaM54OF5KCYDzz0aI41WF9i0&usqp=CAU'
  },
  {
    name: "Don Julio Reposado",
    category: "Tequila",
    description: "Aged 8 months, offering a mellow, elegant taste with hints of dark chocolate and vanilla.",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHuCChq633JwbBw3yAM9LtIA_YW0vpEInbD3O1BmXGr_gEkJ_-Bbr0RJoBnQFYHcrwNA&usqp=CAU'
  },
  {
    name: "Don Julio Blanco",
    category: "Tequila",
    description: "A crisp, fresh tequila with notes of citrus and a smooth, clean finish. Ideal for cocktails.",
    imageUrl: 'https://falabella.scene7.com/is/image/FalabellaPE/122147474_1?wid=800&hei=800&qlt=70'
  },
  {
    name: "Clase Azul Gold",
    category: "Tequila",
    description: "A luxurious blend of tequila and mezcal, aged in bourbon barrels, offering a rich, complex flavor with a hint of agave.",
    imageUrl: 'https://www.binnys.com/globalassets/catalogs/binnys/10/1065/106573/106573.jpg?width=1000&height=1000&rmode=BoxPad&bgcolor=fff'
  },
  {
    name: "Clase Azul Reposado",
    category: "Tequila",
    description: " A premium reposado tequila, aged for 8 months in oak barrels, with a smooth, velvety texture and notes of vanilla and caramel.",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKg4ZTj-LiUbpmi1XHsSBgycfo8xILzvLifOhd_EEf50LUXrS_bFG31ONnET0cdx5e-I&usqp=CAU'
  },
  {
    name: "Clase Azul Plata",
    category: "Tequila",
    description: "A smooth, unaged tequila that showcases the pure flavors of the agave plant with a clean and crisp finish.",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQom8weGCokVbwW0QGH0quZTepxy7iFpFJ_Gg7ysGgLyKrlKwlOOl1shdAzsNMBScQshuQ&usqp=CAU'
  },
  {
    name: "Patron Silver",
    category: "Tequila",
    description: " A premium, handcrafted tequila known for its smooth and sweet taste with a light pepper finish.",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYBAnfIPMpdzpoai5OnGzhbckbIu8BXPch6gIsVLjkJeyL9CNzkdg8B0hzEfmD9ixKlg&usqp=CAU'
  },
  {
    name: "Patron Anejo",
    category: "Tequila",
    description: "Aged for over 12 months, this tequila combines a blend of barrels for a rich and complex taste with notes of oak, vanilla, and raisins.",
    imageUrl: 'https://www.bottlesandcases.com/images/sites/bottlesandcases/labels/patron-anejo-tequila_1.jpg'
  },
  {
    name: "Patron Reposado",
    category: "Tequila",
    description: "Aged for 6 months, this tequila offers a perfect balance of fresh agave and oak wood, with hints of fruit, citrus, and honey.",
    imageUrl: 'https://bremerswineandliquor.com/wp-content/uploads/2018/06/patron-reposado-750ml.png'
  },
  {
    name: "Casamigos Blanco",
    category: "Tequila",
    description: "A smooth, crisp tequila with hints of vanilla and a clean, floral finish, distilled for a refined and elegant profile.",
    imageUrl: 'https://empirewine.imgix.net/item-hqid/16201.jpg?auto=format,compress&fit=max&fill-color=FFFFFF&pad=20&h=600&w=600'
  },
  {
    name: "Casamigos Anejo",
    category: "Tequila",
    description: "Aged for 14 months, it presents a perfect balance of sweetness from the blue weber agaves, with subtle hints of spice and barrel oak.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-pjvamvjhqj/images/stencil/1280x1280/products/9968/7991/158505__66127.1701210536.jpg?c=1'
  },
  {
    name: "Casamigos Reposado",
    category: "Tequila",
    description: "Aged 7 months, this tequila offers a soft, slightly oaky flavor with hints of caramel and cocoa, creating a silky texture with a medium to long smooth finish.",
    imageUrl: 'https://dydza6t6xitx6.cloudfront.net/ci-casamigos-reposado-c8e64577064c12b1.jpeg'
  },
  {
    name: "Casamigos Cristalino",
    category: "Tequila",
    description: "An añejo tequila that's been filtered to remove color, offering a pure taste with notes of vanilla, caramel, and oak, while retaining the complexity of its aging.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/23300/25199/casamigos-cristalino-reposado-tequila__35097.1691753483.jpg?c=2'
  },
  {
    name: "Hornitos Plata",
    category: "Tequila",
    description: "A pure, unaged tequila with a crisp, fresh agave taste and hints of citrus, perfect for mixing or sipping.",
    imageUrl: 'https://www.hornitostequila.com/sites/default/files/2023-08/Plata%20new.png'
  },
  {
    name: "Herradura Silver",
    category: "Tequila",
    description: "A smooth, clean tequila, aged for 45 days, offering a balanced taste with hints of cooked agave and a slightly woody finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/1821/2215/herradura-silver-tequila__33853.1661941562.jpg?c=2'
  },
  {
    name: "Herradura Double Barrel King Reposado",
    category: "Tequila",
    description: "A unique reposado, double aged in oak barrels for a deeper, richer flavor profile with notes of vanilla and spice.",
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/d7df2e2181317fa7bc2566aa0a291dfe/h/e/herradura-king-of-kentucky.jpg'
  },
  {
    name: "Herradura Cristalino Anejo",
    category: "Tequila",
    description: "A filtered añejo tequila offering a clear appearance with the complex flavors of an aged spirit, including vanilla, caramel, and oak.",
    imageUrl: 'https://lpwinesandliquors.com/cdn/shop/products/l-p-wines-liquors-tequila-herradura-ultra-anejo-cristalino-tequila-750-ml-29539970482259_1024x1024.jpg?v=1640274107'
  },
  {
    name: "Don Julio 70",
    category: "Tequila",
    description: " A clear añejo tequila, aged 18 months, combining the complexity of an añejo with the crispness of a blanco, featuring notes of honey and toasted almond.",
    imageUrl: 'https://megawineandspirits.com/cdn/shop/products/don-julio-tequila-don-julio-70-cristalino-anejo-tequila-750ml-31515671658589.jpg?v=1686088152'
  },
  {
    name: "Cincoro Blanco",
    category: "Tequila",
    description: "A smooth, medium-bodied tequila with crisp notes of light spice and agave, perfect for sipping or in elevated cocktails.",
    imageUrl: 'https://siptequila.com/cdn/shop/products/CincoroBlanco.jpg?v=1665254210&width=2080'
  },
  {
    name: "Cincoro Reposado",
    category: "Tequila",
    description: "Aged 8-10 months, this tequila offers a perfect balance of agave, oak, and vanilla flavors, with a hint of spice on the finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/17913/19677/cincoro-resposado-tequila__85625.1661941584.jpg?c=2'
  },
  {
    name: "Laneta Reposado",
    category: "Tequila",
    description: "Aged for a period in oak barrels, this tequila offers a smooth, woody taste with a hint of sweetness and a mellow finish.",
    imageUrl: 'https://tastersclub.com/cdn/shop/files/LanetaTequilaReposado.jpg?v=1698429465'
  },
  {
    name: "AC/DC Thunderstruck Silver",
    category: "Tequila",
    description: "A vibrant, unaged tequila with a bold agave flavor, perfect for fans of rock and fine spirits alike.",
    imageUrl: 'https://www.liquorstore-online.com/product_images/p_54927.jpg'
  },
  {
    name: "Milagro Silver",
    category: "Tequila",
    description: "A crisp, smooth tequila with a fresh agave taste and hints of citrus, ideal for cocktails.",
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/cq5dam.web.1280.1280_3_960x.jpg?v=1587122669'
  },
  {
    name: "Milagro Reposado",
    category: "Tequila",
    description: "Aged for 6 months in oak barrels, providing a balanced taste of vanilla, caramel, and natural agave sweetness.",
    imageUrl: 'https://euphorialiquor.com/cdn/shop/products/4758ce1dd519b9b7131c80a827884ec8.jpg?v=1696464243'
  },
  {
    name: "Milagro Anejo",
    category: "Tequila",
    description: "Aged for 14 months, this tequila offers a rich, complex flavor profile with notes of chocolate, vanilla, and cinnamon.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-d4ygz9et8q/images/stencil/1280x1280/products/1772/1089/milagro__68178.1549562768.jpg?c=2'
  },
  {
    name: "1800 Blanco",
    category: "Tequila",
    description: "A clean, balanced tequila with a smooth taste, featuring subtle hints of agave and a crisp finish.",
    imageUrl: 'https://www.liquorstore-online.com/product_images/p_196187.jpg'
  },
  {
    name: "1800 Cucumber & Jalapeño",
    category: "Tequila",
    description: "A unique, flavored tequila that combines the freshness of cucumber with the spicy kick of jalapeño, perfect for a bold, refreshing cocktail.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/23263/25162/1800-cucumber-and-jalapeno-tequila__97960.1685113189.jpg?c=2`  '
  },
  
  // Whiskey
  
  {
    name: "Rip Van Winkle 12 Year",
    category: "Whiskey",
    description: "An exquisite, well-aged bourbon known for its deep, complex flavors with notes of caramel, vanilla, and oak.",
    imageUrl: 'https://dewinespot.co/cdn/shop/products/pappy_12.jpg?v=1629402633'
  },
  {
    name: "Rip Van Winkle 10 Year",
    category: "Whiskey",
    description: "A premium bourbon offering a rich, full-bodied flavor with hints of honey, spice, and toasted nuts.",
    imageUrl: 'https://cdn.caskers.com/catalog/product/cache/ce56bc73870585a38310c58e499d2fd4/o/l/old-rip-van-winkle-10-year-old-107-proof-1.jpg'
  },
  {
    name: "Jack Daniels Twice Barrele Limited Release American Salt Malt",
    category: "Whiskey",
    description: "A unique single malt, twice barreled for extra depth and a rich, robust flavor profile.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/26103/28008/jack-daniels-2022-twice-barreled-special-release-american-single-malt__10895.1700958594.jpg?c=2'
  },
  {
    name: "Jack Daniels 10 Year",
    category: "Whiskey",
    description: "A matured whiskey with a smooth, refined taste, featuring a balance of sweet and oak flavors.",
    imageUrl: 'https://www.westchesterwine.com/images/sites/westchesterwine/labels/jack-daniels-10-years-old-tennessee-whiskey-limited-release_1.jpg'
  },
  {
    name: "Jack Daniels 12 Year",
    category: "Whiskey",
    description: "Aged for 12 years, offering a more complex and nuanced flavor with a rich, smooth finish.",
    imageUrl: 'https://qualityliquorstore.com/cdn/shop/files/jack-daniels-12-year-old-whiskey__40910.jpg?v=1687292405&width=960'
  },
  {
    name: "Jack Daniels Single Barrel Barrel Proof",
    category: "Whiskey",
    description: "Bottled directly from the barrel, providing a full-strength, intense whiskey experience with deep, robust flavors.",
    imageUrl: 'https://dydza6t6xitx6.cloudfront.net/ci-jack-daniels-single-barrel-barrel-proof-0944c798859c8579.jpeg'
  },
  {
    name: "Jack Daniels Triple Mash",
    category: "Whiskey",
    description: "A blend of three different whiskeys, resulting in a unique, multi-layered flavor profile.",
    imageUrl: 'https://www.elmaliquor.com/wp-content/uploads/2022/09/Jack-Daniels-Triple-Mash-Bottled-In-Bond-Tennessee-Whiskey-1L.jpg'
  },
  {
    name: "Jack Daniels Bonded",
    category: "Whiskey",
    description: "A bold, high-proof whiskey that adheres to the Bottled-in-Bond Act's requirements, offering a robust and authentic taste.",
    imageUrl: 'https://www.winedeals.com/media/catalog/product/cache/f8d2cb12a17084a7445beefcce31e97a/j/a/jack_daniels_bonded_nv_1l.jpg'
  },
  {
    name: "Jack Daniels Rye",
    category: "Whiskey",
    description: "A smooth rye whiskey with a perfect balance of spice and fruity flavors, creating a distinctive taste.",
    imageUrl: 'https://www.blackwellswines.com/cdn/shop/products/fullsizeoutput_3f53_2000x.jpeg?v=1571274440'
  },
  {
    name: "Jack Daniels Honey",
    category: "Whiskey",
    description: "A delightful blend of Jack Daniel's whiskey and honey liqueur, offering a sweet, smooth finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/7135/6502/jack_daniels_honey__78273.1396993771.jpg?c=2'
  },
  {
    name: "Jack Daniels",
    category: "Whiskey",
    description: "The classic Old No. 7, known for its smooth, charcoal-mellowed character and a balance of sweet and oaky flavors.",
    imageUrl: 'https://www.colonialspirits.com/wp-content/uploads/2020/06/JackDanielsTennesseeWhiskey_750-scaled.jpg'
  },
  {
    name: "Kentucky Straight Bourbon",
    category: "Whiskey",
    description: "A high-proof, intensely flavored bourbon known for its deep, rich taste and smooth finish.",
    imageUrl: 'https://www.nobelwineandspirits.com/cdn/shop/products/StaggJrBarrelProof_600x600_crop_center.png?v=1655537867'
  },
  {
    name: "Blantons the Original Single Barrel Bourbon",
    category: "Whiskey",
    description: "A classic single barrel bourbon, known for its rich, full-bodied flavor with hints of caramel and vanilla.",
    imageUrl: 'https://flaskfinewines.com/cdn/shop/products/a7f94161c72e57c836101e848b04cad5_1024x1024.jpg?v=1667675162'
  },
  {
    name: "Widow Jane, Decadence",
    category: "Whiskey",
    description: "A luxurious bourbon infused with the richness of decadent maple syrup, offering a unique, sweet, and complex flavor.",
    imageUrl: 'https://caskcartel.com/cdn/shop/products/f2073ad42ae860afd14876b4fc44882eaad3772a_1024x1024_fa9dda2f-d23e-474a-9251-1e82c749430c_700x.jpg?v=1587389927'
  },
  {
    name: "GlenDronach Highland, Single Malt, Scotch Whiskey, Batch, 12 Cask Strength",
    category: "Whiskey",
    description: "A robust, cask strength Scotch with rich, concentrated flavors of dried fruits, chocolate, and oak.",
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/ae951d999521a598e95129c0582cc30f/g/l/glendronach-cask-strength-batch-12-scotch.jpg'
  },
  {
    name: "GlenDronach 12",
    category: "Whiskey",
    description: "A classic single malt, aged in sherry casks, known for its rich, creamy texture and notes of ripe fruit and spice.",
    imageUrl: 'https://www.blackwellswines.com/cdn/shop/products/1C3B88F9-0262-424F-8307-7B37EFFC9973_1_105_c_1200x.jpg?v=1618757442'
  },
  {
    name: "The Glenlivet 12",
    category: "Whiskey",
    description: "A smooth, balanced single malt Scotch, with a bright, fruity character and a touch of floral sweetness.",
    imageUrl: 'https://img.thewhiskyexchange.com/900/glvob.12yov1.jpg'
  },
  {
    name: "The Glenlivet 14",
    category: "Whiskey",
    description: "An elegant and complex single malt, aged in cognac casks, offering a unique, rich flavor with hints of almonds and spices.",
    imageUrl: 'https://applejack.com/site/images/Glenlivet-14-year-Cognac-Cask-Scotch-750-ml_1.png'
  },
  {
    name: "The Glenlivet 1824",
    category: "Whiskey",
    description: "A premium selection from The Glenlivet, featuring rich, smooth flavors with a harmonious balance of sweet and dry notes.",
    imageUrl: 'https://www.calvertwoodley.com/images/sites/calvertwoodley/labels/glenlivet-single-malt-scotch-founder-s-reserve-speyside.jpg'
  },
  {
    name: "Glenfiddich 12",
    category: "Whiskey",
    description: "A classic single malt Scotch, matured in Oloroso sherry and bourbon casks, known for its pear and oak flavors with a hint of fresh malt.",
    imageUrl: 'https://ludwigsfinewine.com/cdn/shop/products/Glennfiddich12yr_1024x.jpg?v=1702172888'
  },
  {
    name: "Glenfiddich 14",
    category: "Whiskey",
    description: "A unique bourbon barrel reserve Scotch, aged in deep-charred new American Oak barrels, offering rich vanilla and caramel notes.",
    imageUrl: 'https://www.brooklyncellars.com/images/sites/brooklyncellars/labels/glenfiddich-14-yr-bourbon-barrel_1.jpg'
  },
  {
    name: "The Balvenie 12",
    category: "Whiskey",
    description: "A smooth, single malt Scotch, aged in traditional oak and sherry casks, with a balanced honeyed sweetness and a touch of spice.",
    imageUrl: 'https://slash5.winenliquor.com/wp-content/uploads/the-balvenie-12yr-doublewd-750ml.jpg'
  },
  {
    name: "The Balvenie 14 Caribbean Cask",
    category: "Whiskey",
    description: "Aged in rum casks, this Scotch offers a sweet and tropical fruit flavor profile with a hint of toffee and spice.",
    imageUrl: 'https://bonsallfinewine.com/wp-content/uploads/2020/03/The_Balvenie_14_Yr_Caribbean_Cask.jpg'
  },
  {
    name: "Johnny Walker Director's Cut",
    category: "Whiskey",
    description: "A limited-edition blend with a unique, complex character, often featuring a rich, smooth, and slightly smoky flavor.",
    imageUrl: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/329271-001.jpg?itok=J3x_RGVh'
  },
  {
    name: "Johnny Walker Blue Label",
    category: "Whiskey",
    description: "A prestigious blend of rare whiskies, offering depth and complexity with a smooth, mellow finish and hints of smoke, honey, and fruit.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-d4ygz9et8q/images/stencil/1280x1280/products/1155/1654/johnnie_walker_blue__91937.1586546812.jpg?c=2'
  },
  {
    name: "Johnny Walker Black Label",
    category: "Whiskey",
    description: "Aged 12 years, this blend is known for its smooth, deep character, with flavors of dark fruits, vanilla, and smoky finish.",
    imageUrl: 'https://vintagemattituck.com/cdn/shop/products/blend_joh1_1024x1024.jpg?v=1518898555'
  },
  {
    name: "Johnny Walker Red Label",
    category: "Whiskey",
    description: "A bold, vibrant blend, perfect for mixed drinks, with spicy cinnamon and peppery flavors, complemented by a smoky finish.",
    imageUrl: 'https://lpwinesandliquors.com/cdn/shop/products/lp-wines-liquors-scotch-whisky-johnnie-walker-red-label-scotch-whisky-1l-28836503814227_1024x1024.jpg?v=1630867512'
  },
  {
    name: "Weller Full Proof",
    category: "Whiskey",
    description: "A high-proof bourbon that delivers a bold, full-bodied taste with strong notes of vanilla, oak, and caramel.",
    imageUrl: 'https://www.gearpatrol.com/wp-content/uploads/sites/2/2019/10/Weller-Full-Proof-Gear-Patrol-Lead-Full-jpg.webp'
  },
  {
    name: "Weller 12 Years Aged",
    category: "Whiskey",
    description: "Aged 12 years, this bourbon offers a refined and smooth profile, with a complex mix of vanilla, caramel, and aged wood flavors.",
    imageUrl: 'https://dewinespot.co/cdn/shop/files/Weller-12-Years-Old-Box-Musthave-Malts-MHM.jpg?v=1694557450&width=1214'
  },
  {
    name: "Weller Special Reserve",
    category: "Whiskey",
    description: "Known as 'The Original Wheated Bourbon', offering a softer, smoother taste with hints of honey, butterscotch, and a soft woodiness.",
    imageUrl: 'https://canawineco.com/cdn/shop/products/Weller-Bourbon-Special-Reserve-750ml_1024x1024.webp?v=1652305071'
  },
  {
    name: "Weller Antique 107",
    category: "Whiskey",
    description: "A wheated bourbon with a bold and full-flavored profile, featuring notes of caramel, oak, and a hint of spice.",
    imageUrl: 'https://www.reservebar.com/on/demandware.static/-/Sites-reservebar-catalog/default/dwbed4bcef/images/162bece005a6309787d3974c2d08b7aa9c4653d4.jpg'
  },
  {
    name: "Old Forrester Single Barrel Rye Barrel Strength",
    category: "Whiskey",
    description: "A robust rye with deep flavors, bottled at barrel strength for a rich, intense experience.",
    imageUrl: 'https://elcerritoliquor.com/cdn/shop/products/image_1495c975-8723-4c5f-9278-98e149058282.webp?v=1666763811'
  },
  {
    name: "Old Forrester 1920 Prohibition Style",
    category: "Whiskey",
    description: "Mimics the style of Prohibition-era bourbon, with a rich, bold character and flavors of dark fruit, brown spice, and caramel.",
    imageUrl: 'https://corksandcrates.com/cdn/shop/products/old-forester-1920-prohibition-style-115-proof_grande.jpg?v=1661191789'
  },
  {
    name: "Old Forrester 1897 Bottled in Bond",
    category: "Whiskey",
    description: "A historically inspired bourbon, adhering to the Bottled in Bond Act's standards, known for its rich, balanced flavor.",
    imageUrl: 'https://cdn.shoplightspeed.com/shops/655429/files/48310072/old-forester-old-forester-1897-bottled-in-bond-bou.jpg'
  },
  {
    name: "Old Forrester 1870 Original Batch",
    category: "Whiskey",
    description: "A tribute to the brand's first batching process, offering a smooth and mellow profile with rich, layered flavors.",
    imageUrl: 'https://thepartysource.com/image/cache/catalog/inventory/OLD-FORESTER-1870-ORIGINAL-BATCH-WHISKY-500x500.jpg'
  },
  {
    name: "Woodford Reserve Five Malt Stouted Mash Limited Edition Series, Number 17",
    category: "Whiskey",
    description: "A unique whiskey with rich, dark beer notes, offering a complex blend of malt flavors",
    imageUrl: 'https://liquorfreight.com/cdn/shop/files/WoodfordReserveFiveMaltStoutedMash_50fce972-aac1-4daa-86a9-f7eac1ff7ba8.jpg?v=1686331264'
  },
  {
    name: "Woodford Reserve Historic Barrel Entry Limited Edition Series, Number 18",
    category: "Whiskey",
    description: "A special release with a focus on the historic barrel entry proof, delivering a unique, flavorful experience.",
    imageUrl: 'https://liquorfreight.com/cdn/shop/files/27_2.jpg?v=1686424408'
  },
  {
    name: "The Yamazaki, Single Malt Japanese Whiskey, Aged 12 Years",
    category: "Whiskey",
    description: "A revered Japanese single malt with a delicate balance of fruit and Mizunara oak, offering a subtle sweetness and a spicy finish.",
    imageUrl: 'https://www.finewineandgoodspirits.com/ccstore/v1/images/?source=/file/v1204921012564326594/products/000030981_1001646_F1.jpg&height=475&width=475'
  },
  {
    name: "The Macallan 18 Years Old",
    category: "Whiskey",
    description: "A rich and complex single malt Scotch, aged in sherry oak casks, with flavors of dried fruits, spice, and chocolate.",
    imageUrl: 'https://flaskfinewines.com/cdn/shop/products/21000000801901.jpg?v=1657305510'
  },
  {
    name: "The Macallan 15 Years Old",
    category: "Whiskey",
    description: "A balanced single malt, matured in a mix of sherry and bourbon oak casks, offering flavors of citrus, vanilla, and oak.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-ff6e5/images/stencil/1280x1280/products/9977/4641/mac15-box_960x__58546.1653525260.jpg?c=2'
  },
  {
    name: "The Macallan The Harmony Collection Inspired by Intense Arabica",
    category: "Whiskey",
    description: "A unique single malt inspired by Arabica coffee, featuring deep, rich flavors with notes of roasted coffee and chocolate.",
    imageUrl: 'https://www.smartbites.net/Files/109575/Img/02/macallan-harmony-arabica.jpg'
  },
  {
    name: "The Macallan The Harmony Collection, Inspired by Rich Cacao",
    category: "Whiskey",
    description: "A part of the Harmony collection, this Scotch is influenced by the flavors of cacao, offering rich, chocolatey notes and a luxurious finish.",
    imageUrl: 'https://sothebys-md.brightspotcdn.com/dims4/default/6bffc44/2147483647/strip/true/crop/2000x2000+0+0/resize/1024x1024!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F90%2Fca%2Feacfa1c64a38ad3f11d8e92fd534%2Fl22428-l036175-a-2.jpg'
  },
  {
    name: "Hibiki Suntory Whisky Japanese Harmony",
    category: "Whiskey",
    description: "A harmonious blend of Japanese malt and grain whiskies, offering a symphony of flavors with hints of honey, orange, and a subtle smokiness.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/small_image/640x/a4e40ebdc3e371adff845072e1c73f37/1/0/102090_hibiki-japanese-harmony_700.jpg'
  },
  {
    name: "Toki Suntory Whisky",
    category: "Whiskey",
    description: "A versatile Japanese blend, combining whiskies from Suntory's distilleries, with a light, smooth taste and a hint of honeyed sweetness.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-iuzua3aqk6/images/stencil/1280x1280/products/3389/3628531/111741__55673.1639692936.jpg?c=2'
  },

  // Cognac
  
  {
    name: "Hennessey Paradis",
    category: "Cognac",
    description: "An exquisite blend of over 100 very old eaux-de-vie from Cognac's finest growing regions, offering a rare, harmonious taste.",
    imageUrl: 'https://static.cognac-expert.com/2295-large_default/hennessy-hors-d-age-cognac-paradis.jpg'
  },
  {
    name: "Hennessey XO",
    category: "Cognac",
    description: "A rich and complex Cognac, featuring a blend of 100 eaux-de-vie, with deep and powerful flavors of cocoa, fruit, and spices.",
    imageUrl: 'https://www.melandrose.com/prodimages/11341-DEFAULT-l.jpg'
  },
  {
    name: "Hennessey VSOP",
    category: "Cognac",
    description: "A well-balanced Cognac, aged for at least 4 years, offering a smooth blend of wood notes and spices.",
    imageUrl: 'https://leivine.com/cdn/shop/products/Hennessy-VSOP_--750-ML.png?v=1670446193&width=1445'
  },
  {
    name: "Hennessey VS",
    category: "Cognac",
    description: "A popular young Cognac, known for its bold yet harmonious blend of flavors including oak, fruit, and vanilla.",
    imageUrl: 'https://www.hennessy.com/sites/hennessy/files/2020-01/PRODUIT_VS.png'
  },
  {
    name: "Hennessey VS, Honoring 50 Years of Hip-Hop Limited Edition",
    category: "Cognac",
    description: "A special edition that celebrates the influence of hip-hop culture, maintaining the classic Hennessy VS taste.",
    imageUrl: 'https://www.vintage-liquors.com/5870-thickbox_default/hennessy-cognac-vs-hip-hop-50th-x-nas-limited-edition.jpg'
  },
  {
    name: "Hennessey VS NBA Collectors Edition",
    category: "Cognac",
    description: "A limited edition celebrating Hennessy's partnership with the NBA, offering the classic VS taste in a collector's bottle.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/small_image/640x/a4e40ebdc3e371adff845072e1c73f37/1/0/104975_hennessy-vs-nba-2022-2023-700ml-40vol.jpg'
  },
  {
    name: "Hennessey White",
    category: "Cognac",
    description: "A lighter, more floral variant of Hennessy, known for its fresh, fruity flavors and smooth finish.",
    imageUrl: 'https://www.astorwines.com/images/items/49616.jpg'
  },
  {
    name: "Remy Martin 1738",
    category: "Cognac",
    description: "A luxurious Cognac, smooth and rich, with flavors of butterscotch, baked spices, and dark chocolate.",
    imageUrl: 'https://bankswinesandspirits.com/cdn/shop/products/remy-martin-1738-cognac-750ml-36879263957234_600x.jpg?v=1645898581'
  },
  {
    name: "Remy Martin VSOP",
    category: "Cognac",
    description: "A fine Cognac, aged in French Limousin oak barrels, offering a perfect harmony of mature and intense flavors.",
    imageUrl: 'https://winenliquor.com/wp-content/uploads/remy-martin-vsop-1l.jpg'
  },
  {
    name: "Dusse VSOP",
    category: "Cognac",
    description: " modern VSOP Cognac with a bold and full-bodied profile, featuring notes of almond, spices, and a hint of honey.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/8136/8599/dusse-vsop-cognac__04835.1661873807.jpg?c=2'
  },
  {
    name: "Courvoisier VSOP",
    category: "Cognac",
    description: "A refined and complex Cognac, aged up to 10 years, with a delicate bouquet of vanilla, grape, and a touch of oak.",
    imageUrl: 'https://www.delicando.com/imagecache/item-fullscreen/adf12622ec5f0cf67fe37c1d8169b794e5e1d276cfd1865ac7b4e72b38383b3e.jpg'
  },
  {
    name: "Courvoisier VS",
    category: "Cognac",
    description: "A young and lively Cognac, aged for at least 2 years, offering a blend of fruit, fresh oak, and a hint of spice.",
    imageUrl: 'https://i5.walmartimages.com/seo/Courvoisier-Vs-Cognac-750-ml-Bottle-ABV-40-0_3c8056db-5b57-4358-8bfe-a3b2603576b5.8d9d7e66f85e4374779ec1f1f16bcb5b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
  },
  {
    name: "Deau XO",
    category: "Cognac",
    description: "beautifully aged Cognac, rich and full, with deep flavors of mature fruit, spices, and a long, satisfying finish.",
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/DeauCognacXO-_750mlBottle_1000x.png?v=1592265643'
  },
  {
    name: "Pierre Vallet XXO",
    category: "Cognac",
    description: "An extra-extra-old Cognac, offering a luxurious depth of flavor with layers of aged fruit, spice, and oak.",
    imageUrl: 'https://cdn.myshoptet.com/usr/www.finelabels.cz/user/shop/big/1069-2_pierre-vallet-xxo-carafe-0-7l-40.jpg?6233582b'
  },
  {
    name: "Pierre Vallet XO",
    category: "Cognac",
    description: "An elegantly aged Cognac, with complex flavors of dried fruit, nutmeg, and hints of leather and tobacco.",
    imageUrl: 'https://cdn02.plentymarkets.com/la0rqaqio8pl/item/images/4375/full/pierreXO.JPG'
  },
  {
    name: "Pierre Vallet VSOP",
    category: "Cognac",
    description: "A well-balanced Cognac, offering a harmonious blend of fruit and oak, with a smooth, refined finish.",
    imageUrl: 'https://cellar.com/cdn/shop/files/169955.jpg?v=1688725940'
  },
  {
    name: "Pierre Vallet VS",
    category: "Cognac",
    description: "A young and vibrant Cognac, with a fresh and fruity profile, making it an excellent base for cocktails.",
    imageUrl: 'https://chamberswineandliquor.com/wp-content/uploads/2021/12/854831000803.jpg'
  },
  {
    name: "Monroi XO",
    category: "Cognac",
    description: "A rich and complex Cognac, offering a symphony of aged flavors including caramelized fruit, spices, and a touch of oak.",
    imageUrl: 'https://static.wixstatic.com/media/945d37_09da11638cdb4c168ab7c17822d9c1e4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg'
  },
  {
    name: "Sarajishvili XO",
    category: "Cognac",
    description: "A Georgian brandy with a rich heritage, offering deep flavors of aged fruit, vanilla, and a smooth, oaky finish.",
    imageUrl: 'https://static.wixstatic.com/media/564aa0_c5a7aaaf3e104c69a456e73ed39ef320~mv2.jpg/v1/crop/x_277,y_424,w_1401,h_1076/fill/w_596,h_458,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/XO%20WITH%20BOX%200_7.jpg'
  },
  {
    name: "Sarajishvili VSOP",
    category: "Cognac",
    description: "A balanced and smooth Georgian brandy, with a blend of fruit, vanilla, and subtle oak notes.",
    imageUrl: 'https://static.wixstatic.com/media/564aa0_29f576f0fb7048b48169ce9deceb2d9e~mv2.jpg/v1/crop/x_0,y_423,w_1333,h_1438/fill/w_616,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VSOP%20WITH%20BOX%200_7.jpg'
  },
  {
    name: "Sarajishvili VS",
    category: "Cognac",
    description: "A young and fresh Georgian brandy, offering a lively and fruity taste, perfect for mixing in cocktails.",
    imageUrl: 'https://winestyleonline.com/images_gen/628/62834/0_0_orig.webp'
  },
  {
    name: "Meukow VS",
    category: "Cognac",
    description: "A distinctive Cognac with a bold character, featuring flavors of fruit, almonds, and a hint of vanilla.",
    imageUrl: 'https://static.cognac-expert.com/8666-large_default/meukow-vs-cognac.webp'
  },
  {
    name: "Pierre Patou VS",
    category: "Cognac",
    description: "A fine Cognac known for its smooth, balanced taste, and a blend of fruity and spicy notes.",
    imageUrl: 'https://www.metroliquors.com/images/sites/metroliquors/labels/pierre-patou-patou-vs-cognac_1.jpg'
  },
  {
    name: "Pasquinet XO",
    category: "Cognac",
    description: "A luxurious Cognac, aged for many years, offering a rich and complex flavor profile with a velvety finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/7757/14942/Pasquinet-XO__70538.1609431755.jpg?c=2'
  },
  {
    name: "Pasquinet VSOP",
    category: "Cognac",
    description: "A harmonious Cognac, with a perfect balance of matured flavors including oak, vanilla, and a hint of fruit.",
    imageUrl: 'https://gnf-group.com/wp-content/uploads/2018/02/cognac-xo-rare-pasquinet-2.jpg'
  },
  {
    name: "Pasquinet VS",
    category: "Cognac",
    description: "A young Cognac, offering a fresh and fruity profile, perfect for cocktails or enjoying neat.",
    imageUrl: 'https://www.cognac-expert.com/img/p/5/5/0/8/5508-large_default.jpg'
  },

  // Champagne

  {
    name: "Veuve Clicquot Demi Sec",
    category: "Champagne",
    description: "A slightly sweet champagne, rich and full-bodied with flavors of ripe fruit and hints of brioche.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/4380/3781/veuve_clicquot_demi_sec__08744.1346795980.jpg?c=2'
  },
  {
    name: "Veuve Clicquot Rosé",
    category: "Champagne",
    description: "A delightful rosé champagne offering a harmonious blend of red fruits and biscuity notes with a smooth finish.",
    imageUrl: 'https://megawineandspirits.com/cdn/shop/products/veuve-clicquot-champagne-sparkling-veuve-clicquot-rose-750ml-31515611234397.jpg?v=1686089273&width=1080'
  },
  {
    name: "Veuve Clicquot Brut",
    category: "Champagne",
    description: "A classic, dry champagne known for its crisp acidity and flavors of apple, pear, and citrus with a hint of almond.",
    imageUrl: 'https://www.wine.com/product/images/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/528fbs.jpg'
  },
  {
    name: "Moët Impérial",
    category: "Champagne",
    description: "A widely acclaimed brut champagne, well-balanced with vibrant fruitiness and a subtle finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-9hu30/images/stencil/2048x2048/products/312/2433/moet_and_chandon_brut_imperial_12l_balthazar__96064.1595961623.jpg?c=2'
  },
  {
    name: "Moet Nectar Impérial Rosé",
    category: "Champagne",
    description: "A voluptuous rosé champagne, offering rich flavors of red fruits and sweet caramel with a smooth, seductive finish.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-9hu30/images/stencil/2048x2048/products/172/2419/moet_and_chandon_nectar_imperial_rose__81291.1556130419.jpg?c=2'
  },
  {
    name: "Moet Ice Impérial Rosé",
    category: "Champagne",
    description: "Designed to be served over ice, this rosé champagne is refreshing with a fruity intensity and a hint of sweetness.",
    imageUrl: 'https://vintageliquor.com/wp-content/uploads/2022/07/101086_moet_ice_imperial_rose_750_3.jpg'
  },
  {
    name: "Santa Margarita Rosé Brut",
    category: "Champagne",
    description: "A crisp and elegant Italian sparkling rosé, with a bouquet of red berries and floral notes.",
    imageUrl: 'https://cdn.shopify.com/s/files/1/1410/8098/products/santa-margheritta-rose.jpg?v=1679778749'
  },
  {
    name: "Victorious Pink Grande Cuvée",
    category: "Champagne",
    description: "A sophisticated sparkling wine with delicate flavors of red fruits and a hint of toastiness.",
    imageUrl: 'https://products0.imgix.drizly.com/ci-lafage-la-grande-cuvee-rose-3ba280c07aae5c76.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20'
  },
  {
    name: "Mondoro Asti",
    category: "Champagne",
    description: "A sweet and aromatic Italian sparkling wine, with fresh flavors of peach and apricot.",
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/MONDOROASTI.jpg'
  },
  {
    name: "Nando Fragolino",
    category: "Champagne",
    description: "A lightly sparkling wine with a sweet, fruity taste reminiscent of strawberries.",
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/NANDOFRAGOLINO.jpg'
  },
  {
    name: "Brilla Prosecco",
    category: "Champagne",
    description: "A light and refreshing Prosecco with a balanced palate of green apple and pear.",
    imageUrl: 'https://winenliquor.com/wp-content/uploads/brilla-prosecco-rose.jpg'
  },
  {
    name: "LaMarca Prosecco",
    category: "Champagne",
    description: "A popular Prosecco known for its vibrant flavors of green apple, honeydew, and fresh citrus.",
    imageUrl: 'https://www.dcwineandspirits.com/image/cache/catalog/Gift/wine-gift/lamarca-prosecco-and-flutes-gift-set-1000x1000.jpeg'
  },
  {
    name: "Mionetto Prosecco",
    category: "Champagne",
    description: "A crisp and lively Prosecco with a bouquet of golden apple, honey, and white peach.",
    imageUrl: 'https://www.binnys.com/globalassets/catalogs/binnys/14/1421/142149/142149.jpg?width=1000&height=1000&rmode=BoxPad&bgcolor=fff'
  },
  {
    name: "Good Fucking Bubbles Prosecco",
    category: "Champagne",
    description: "A boldly named Prosecco with a lively taste profile, featuring crisp fruit and floral notes.",
    imageUrl: 'https://goodfuckingbrands.com/img/UploadImages/GoodFucking%20Brands%20-%20Bubbles_SM_.jpg'
  },
  {
    name: "Viamora Prosecco",
    category: "Champagne",
    description: "A fresh and well-balanced Prosecco, offering flavors of pear, green apple, and a hint of lemon zest.",
    imageUrl: 'https://www.pensacolaliquors.com/cdn/shop/products/viamoraprosecco_1024x1024.jpg?v=1688049634'
  },

  // Vodka

  {
    name: "Trump",
    category: "Vodka",
    description: "A premium vodka known for its smooth, clean taste and luxurious presentation.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-k0y7xl9dpv/images/stencil/1280x1280/products/77681/39210/119496__64346.1647377597.jpg?c=1'
  },
  {
    name: "Grey Goose",
    category: "Vodka",
    description: "A high-end French vodka, famous for its smoothness and subtle hints of almond and citrus.",
    imageUrl: 'https://spiritedgifts.com/media/catalog/product/cache/46c431383be94871dec6f32997c07165/a/p/api-v1.1-file-public_files-pim-assets-a5-15-27-5f-5f2715a5e6a7975d860fafd4-images-65-00-28-65-6528006531d289193deb1c48-Grey-Goose-Original-Vodka-Large_01.jpg'
  },
  {
    name: "Beluga",
    category: "Vodka",
    description: "A Russian vodka of exceptional quality, smooth with a slight grain taste and a clean finish.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1500x/a4e40ebdc3e371adff845072e1c73f37/1/0/104998_Beluga_Noble_Vodka_700ml_40vol.jpg'
  },
  {
    name: "Absolut",
    category: "Vodka",
    description: "A popular Swedish vodka, known for its pure taste and a wide range of flavored variants.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-d4ygz9et8q/images/stencil/1280x1280/products/1981/893/absolutvodka_750__83821.1584556075.jpg?c=2'
  },
  {
    name: "Tanqueray Sterling",
    category: "Vodka",
    description: "A crisp and smooth vodka, with a light body and a clean, balanced finish.",
    imageUrl: 'https://m7c7b5s9.rocketcdn.me/wp-content/uploads/2018/07/5000281005966_2.jpg.webp'
  },
  {
    name: "Ketel One",
    category: "Vodka",
    description: "A Dutch vodka, crafted with traditional distilling methods, offering a crisp, unique, and smooth taste.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/1/8/18131_ketel-one-vodka-10l-40-vol.jpg'
  },
  {
    name: "Tito’s",
    category: "Vodka",
    description: "An American handmade vodka, distilled from corn, known for its micro-distillery character and smoothness.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/1/0/104687_titos-handmade-vodka-40-vol-175-liter.jpg'
  },
  {
    name: "Smirnoff",
    category: "Vodka",
    description: "A widely recognized brand, offering a clean taste and a versatile range of flavors.",
    imageUrl: 'https://winenliquor.com/wp-content/uploads/0008200010570_A__53852.1471964368.1280.1280.jpg'
  },
  {
    name: "Russian Standard",
    category: "Vodka",
    description: "A classic Russian vodka, combining traditional wheat taste with modern distilling techniques.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-taixn69rog/images/stencil/1280x1280/products/28258/806189/146003__41412.1637565260.jpg?c=1'
  },
  {
    name: "Balinoff",
    category: "Vodka",
    description: "A premium vodka with a crisp and clear flavor, distilled multiple times for purity.",
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/BalinoffVodka_1.75Bottle_1000x.png?v=1589746720'
  },
  {
    name: "Finlandia",
    category: "Vodka",
    description: "A Finnish vodka, known for its pure glacial water source and a crisp, clean taste.",
    imageUrl: 'https://lavinotheque.com/4442-large_default/finlandia-vodka-750ml.jpg'
  },
  {
    name: "Mont Blanc",
    category: "Vodka",
    description: "A refined vodka, known for its smoothness and purity, inspired by the elegance of the Mont Blanc mountain.",
    imageUrl: 'https://www.liquorstore-online.com/product_images/p_159971.jpg'
  },
  {
    name: "Ice Kube",
    category: "Vodka",
    description: "A cool, clean vodka with a smooth taste, often preferred for chilled shots and cocktails.",
    imageUrl: 'https://www.beveragelovers.com/images/sites/beveragelovers/labels/ice-cube-vodka_1.jpg'
  },
  {
    name: "Khor",
    category: "Vodka",
    description: "A Ukrainian vodka, known for its purity and smooth, balanced flavor.",
    imageUrl: 'https://empirewine.imgix.net/item-hqid/46437.jpg?auto=format,compress&fit=max&fill-color=FFFFFF&pad=20&h=600&w=600'
  },
  {
    name: "Petergoff",
    category: "Vodka",
    description: "A traditional Russian vodka, offering a clean and crisp taste with a smooth finish.",
    imageUrl: 'https://doynawine.com/upload/catalog/en/tn1_0_58029000_1608699788_5fe2cf8c8db3d.jpg'
  },
  {
    name: "Old Barrel",
    category: "Vodka",
    description: "A vodka with a unique aging process, offering a rich and slightly oaky flavor profile.",
    imageUrl: 'https://tipxy.com/cdn/shop/products/E48FD0F9AC1F16910000000083E2C06AOld_Barrel_Vodka_600x600.jpg?v=1623037310'
  },
  {
    name: "Noble Cask",
    category: "Vodka",
    description: "A premium vodka aged in casks for a distinctive, smooth, and refined taste.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/11441/12766/Noble-Cask-Vodka__50624.1524252486.jpg?c=2'
  },
  {
    name: "Score",
    category: "Vodka",
    description: "A smooth and pure vodka, often recognized for its quality and versatility in cocktails.",
    imageUrl: 'https://cdn.caskers.com/catalog/product/cache/ce56bc73870585a38310c58e499d2fd4/s/c/score-ultra-smooth-vodka_1.jpg'
  },
  {
    name: "Georgievskaya",
    category: "Vodka",
    description: "A Russian vodka, offering a classic, clean taste with a smooth finish.",
    imageUrl: 'https://media.salvex.com/auction/p/1829446/182944566_163831_lp.jpg'
  },
  {
    name: "Plush Plum Vodka",
    category: "Vodka",
    description: "A flavored vodka with a sweet and tart plum taste, offering a unique and delightful flavor profile.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/22472/24356/plush-plum-vodka__20648.1661943030.jpg?c=2'
  },
  {
    name: "Ed Hardy",
    category: "Vodka",
    description: "A designer-branded vodka, known for its bold bottle design and smooth, clean taste.",
    imageUrl: 'https://i.pinimg.com/736x/23/ea/73/23ea7360a147adae4ca2a8ce35422919.jpg'
  },
  {
    name: "BJM Georgian Vodka",
    category: "Vodka",
    description: "A Georgian vodka, recognized for its smoothness and traditional distilling methods.",
    imageUrl: 'https://novus.online/uploads/10/52406-4860121390017.jpg'
  },
  {
    name: "Green Mark",
    category: "Vodka",
    description: "A quality Russian vodka, known for its traditional wheat taste and purity.",
    imageUrl: 'https://woodencork.com/cdn/shop/products/green-mark-vodka.png?v=1699066788'
  },
  {
    name: "Lithuanian Black Currant",
    category: "Vodka",
    description: "A flavored vodka with the rich taste of black currants, offering a sweet and fruity profile.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/5114/16335/Lithuanian-Black-Currant-Vodka__93605.1646414610.jpg?c=2'
  },
  {
    name: "New Amsterdam",
    category: "Vodka",
    description: "An American vodka, known for its soft, smooth taste and a range of flavored expressions.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/11040/11767/new-amsterdam-original-vodka__94722.1706565715.jpg?c=2'
  },
  {
    name: "Xdar",
    category: "Vodka",
    description: "A premium vodka with a smooth, refined taste, suitable for sipping neat or in cocktails.",
    imageUrl: 'https://shopsk.com/cdn/shop/products/Studio_Project-2022-05-25T080957.175.jpg?v=1653491455'
  },
  {
    name: "Burnett",
    category: "Vodka",
    description: "A budget-friendly vodka, offering a clean taste suitable for mixing in a variety of cocktails.",
    imageUrl: 'https://www.donsliquorsandwine.com/cdn/shop/products/Burnett_sVodka_1024x1024.png?v=1680101044'
  },
  {
    name: "Barton",
    category: "Vodka",
    description: "An affordable American vodka, known for its straightforward, clean taste.",
    imageUrl: 'https://www.grandislandwineandspirits.com/cdn/shop/products/BARTONVodka375.jpg?v=1600288159'
  },
  {
    name: "Voda 5X",
    category: "Vodka",
    description: "A distilled vodka known for its purity and smoothness, often chosen for mixed drinks.",
    imageUrl: 'https://www.nobelwineandspirits.com/cdn/shop/products/vodavodka_800x.jpg?v=1621472070'
  },
  {
    name: "Svedka",
    category: "Vodka",
    description: "A Swedish vodka, popular for its purity and a wide array of flavors.",
    imageUrl: 'https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/2344/1840/svedka-750__49130.1336598239.jpg?c=2'
  },
  {
    name: "Fris",
    category: "Vodka",
    description: "A Danish vodka, distilled with freeze distillation technology, offering a smooth and crisp taste.",
    imageUrl: 'https://worldwineliquors.com/wp-content/uploads/2021/05/eb83a3d9-6917-4553-bd5a-833594f7615e.png'
  },
  {
    name: "Sobieski",
    category: "Vodka",
    description: "A Polish vodka, known for its rye-based smoothness and exceptional clarity.",
    imageUrl: 'https://vodkabuzz.com/uploads/2008/08/sobieski.jpg'
  },
  {
    name: "Ukrainian Freedom",
    category: "Vodka",
    description: "A vodka celebrating Ukrainian heritage, known for its smooth taste and pure quality.",
    imageUrl: 'https://novus.online/uploads/8/44177-4820050235667_1.jpg'
  },
  {
    name: "Ukrainian Spirit",
    category: "Vodka",
    description: "A traditional Ukrainian vodka, offering a smooth, clean taste with a nod to its cultural roots.",
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/ae951d999521a598e95129c0582cc30f/u/k/ukrainian-spirit-vodka.jpg'
  },
  {
    name: "Hetman Ukrainian Vodka",
    category: "Vodka",
    description: "A premium Ukrainian vodka, named after the historical title of Hetman, known for its purity and smoothness.",
    imageUrl: 'https://cdn.selection-prestige.de/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/1/0/104804_hetman-vodka-original-gorilka-07l-40-vol.jpg'
  },

  // Wine

  {
    name: 'Jeunesse Black Muscat Semi Sweet',
    category: 'Wine',
    subcategory: 'California',
    description: 'A semi-sweet Black Muscat from Jeunesse, showcasing a luscious blend of ripe berry flavors with floral undertones, perfect for those who enjoy a touch of sweetness in their wine.',
    imageUrl: 'https://www.kosherwine.com/media/catalog/product/b/a/baron-herzog-jeunesse-black-muscat-15431-base-526829084593de9d151a037c0e2b571a36d33b4c.jpg?width=265&height=265&store=kosher_sv_migrated&image-type=image'
  },
  {
    name: 'Jeunesse Cabernet Sauvignon Semi Sweet',
    category: 'Wine',
    subcategory: 'California',
    description: 'This semi-sweet Cabernet Sauvignon by Jeunesse offers the perfect balance between the natural robustness of the grape and a delicate sweetness, creating a smooth and enjoyable drinking experience.',
    imageUrl: 'https://buywinesonline.com/cdn/shop/files/JeunesseCaliforniaCabernetSauvignon2021_grande.jpg?v=1689870574'
  },
  {
    name: 'Baron Herzog Cabernet Sauvignon',
    category: 'Wine',
    subcategory: 'California',
    description: 'Baron Herzog\'s Cabernet Sauvignon stands as a testament to California winemaking. With flavors of dark fruits, a hint of oak, and smooth tannins, it’s a versatile wine that pairs well with a variety of dishes.',
    imageUrl: 'https://images.heb.com/is/image/HEBGrocery/prd-medium/000219989.jpg'
  },
  {
    name: 'Rashi Semi Sweet, Red Wine',
    category: 'Wine',
    subcategory: 'California',
    description: 'Rashi\'s semi-sweet red wine offers a delightful blend of sweetness and red wine complexity, making it an excellent choice for those new to red wines or those who prefer a sweeter wine experience.',
    imageUrl: 'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h95/h91/12217774931998.png'
  },
  {
    name: 'Papillon',
    category: 'Wine',
    subcategory: 'California',
    description: 'A bold red blend, known for its rich, intense flavors of dark fruit, chocolate, and oak, with a smooth finish.',
    imageUrl: 'https://thesavorygrape.com/wp-content/uploads/2020/11/Orin-Swift-Papillon-750-ml-jpg.webp'
  },
  {
    name: 'Volunteer',
    category: 'Wine',
    subcategory: 'California',
    description: 'A full-bodied wine, often a Cabernet Sauvignon, with flavors of dark fruit, oak, and a hint of spice.',
    imageUrl: 'https://www.drinkhacker.com/wp-content/uploads/2015/06/Volunteer_BNA.jpg'
  },
  {
    name: 'The Critic',
    category: 'Wine',
    subcategory: 'California',
    description: 'A versatile wine, known for its balanced flavor profile, often featuring notes of fruit, oak, and a smooth finish.',
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/THECRITICCAB.jpg'
  },
  {
    name: 'Bonanza',
    category: 'Wine',
    subcategory: 'California',
    description: 'A flavorful and approachable Cabernet Sauvignon, with rich notes of dark fruit, vanilla, and a hint of oak.',
    imageUrl: 'https://cdn.shoplightspeed.com/shops/608130/files/22923146/1600x2048x2/caymus-vinyards-bonanza-by-chuck-wagner-california.jpg'
  },
  {
    name: 'Eaglestone',
    category: 'Wine',
    subcategory: 'California',
    description: 'Known for producing quality wines with distinctive flavors, often featuring rich fruit and balanced oak notes.',
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/d7df2e2181317fa7bc2566aa0a291dfe/e/a/eaglestone-zinfandel.jpg'
  },
  {
    name: 'The Prisoner',
    category: 'Wine',
    subcategory: 'California',
    description: 'A popular red blend, characterized by its bold, robust flavors of ripe fruit, spices, and a smooth, lingering finish.',
    imageUrl: 'https://www.everythingwine.ca/media/catalog/product/4/5/457291_prisoner_red_blend_nv.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
  },
  {
    name: '8 Years in the Desert',
    category: 'Wine',
    subcategory: 'California',
    description: 'A rich and intense red blend, with deep flavors of dark fruit, spices, and chocolate, crafted by a renowned winemaker.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1410/8098/products/orin-swift-8-years-in-the-desert_d1fdba6f-09f8-42a4-b4f7-d01be9043323.jpg?v=1679030665'
  },
  {
    name: 'Abstract',
    category: 'Wine',
    subcategory: 'California',
    description: 'A flavorful blend of Grenache, Petite Sirah, and Syrah, offering complex notes of dark fruit, spice, and a touch of earthiness.',
    imageUrl: 'https://www.edsfinewines.com/wp-content/uploads/2020/07/Orin-Swift-Abstract.jpg'
  },
  {
    name: 'Kunde',
    category: 'Wine',
    subcategory: 'California',
    description: 'Renowned for producing a range of quality wines, often with a focus on showcasing the unique terroir of their vineyards.',
    imageUrl: 'https://storage.googleapis.com/images-cub-prd-9400d55.cub.prd.v8.commerce.mi9cloud.com/product-images/detail/d7607535-c6c4-492e-8a91-b86fe8be41ff.jpeg'
  },
  {
    name: 'Sonoma Cutrer',
    category: 'Wine',
    subcategory: 'California',
    description: 'A winery known for its high-quality Chardonnays, featuring crisp acidity, creamy texture, and notes of oak and fruit.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-taixn69rog/images/stencil/1280x1280/products/32669/808274/551982__48472.1637570485.jpg?c=1'
  },
  {
    name: 'Sea Sun',
    category: 'Wine',
    subcategory: 'California',
    description: 'A Chardonnay with a rich, layered taste, offering flavors of citrus, pear, and a hint of oak.',
    imageUrl: 'https://www.edsfinewines.com/wp-content/uploads/2020/07/Sea-Sun-Pinot-Noir.jpg'
  },
  {
    name: 'Josh',
    category: 'Wine',
    subcategory: 'California',
    description: 'A label known for producing approachable wines, including a popular Cabernet Sauvignon with flavors of dark fruit and spices.',
    imageUrl: 'https://applejack.com/site/images/Josh-Cabernet-Sauvignon-750-ml_1.png'
  },
  {
    name: 'Julia James',
    category: 'Wine',
    subcategory: 'California',
    description: 'A Pinot Noir known for its elegance and smoothness, featuring flavors of red fruit, earth, and a hint of oak.',
    imageUrl: 'https://images.freshop.com/00080175531097/6b364b1cfac6e22d048f5756ed302994_large.png'
  },
  {
    name: 'Apothic',
    category: 'Wine',
    subcategory: 'California',
    description: 'A brand famous for its bold red blends, offering rich, innovative flavors with a smooth, velvety finish.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-taixn69rog/images/stencil/1280x1280/products/38226/800516/537542__64069.1637488089.jpg?c=1'
  },
  {
    name: 'Harken',
    category: 'Wine',
    subcategory: 'California',
    description: 'Known for their barrel-fermented Chardonnay, offering a creamy texture with flavors of butter, oak, and tropical fruit.',
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/HARKENCHARDONNAY.jpg'
  },
  {
    name: 'Wanted',
    category: 'Wine',
    subcategory: 'California',
    description: 'A brand that typically produces bold and rich wines, often characterized by their robust flavor profiles and smooth finishes.',
    imageUrl: 'https://cdn.myshoptet.com/usr/www.dejsivino.cz/user/shop/big/2044-1_wanted-zinfandel-pritmitivo-gold-rush-suche-0-75-l.jpg?64478f9a'
  },
  {
    name: 'Le pacte des anges',
    category: 'Wine',
    subcategory: 'France',
    description: 'A fine wine, often characterized by its complexity and elegance, with a focus on expressing the terroir and vintage.',
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/ae951d999521a598e95129c0582cc30f/l/e/le-pacte_des-anges-terrasses-du-larzac.jpg'
  },
  {
    name: 'Naxicarignanus',
    category: 'Wine',
    subcategory: 'France',
    description: 'A unique wine, possibly a blend, known for its distinct flavors, often showcasing the richness of the regions grapes.',
    imageUrl: 'https://bestbuyliquors.com/media/catalog/product/cache/6d51602d1ab510e6da0c653edac763a5/m/a/maxicarignanus-red_1.jpg'
  },
  {
    name: 'Chateauneuf Du Pape La Destinee de Clement V',
    category: 'Wine',
    subcategory: 'France',
    description: 'A prestigious red wine from the Châteauneuf-du-Pape appellation, known for its rich, full-bodied character with flavors of dark fruit and spices.',
    imageUrl: 'https://www.paewine.com/wp-content/uploads/2021/05/BD255-La-Destinee-de-Clement-V.png'
  },
  {
    name: 'Chateauneuf Du Pape La fiole du Pape',
    category: 'Wine',
    subcategory: 'France',
    description: 'A well-known wine with a distinctive bottle shape, offering a robust and complex flavor profile with a blend of various grape varieties.',
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/LAFIOLEDUPAPECHATDUPAPE.jpg'
  },
  {
    name: 'Sancerre',
    category: 'Wine',
    subcategory: 'France',
    description: 'A famous white wine from the Loire Valley, typically made from Sauvignon Blanc, known for its crisp acidity, minerality, and citrus flavors.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/21410/23279/cave-des-vins-de-sancerre-les-tuilieres__78662.1691342396.jpg?c=2'
  },
  {
    name: 'Whispering Angel',
    category: 'Wine',
    subcategory: 'France',
    description: 'A popular Provence rosé, light and refreshing with notes of red fruit, citrus, and a delicate floral hint.',
    imageUrl: 'https://grainvine.com/cdn/shop/products/2022-Whispering-Angel-Cotes-De-Provence-Rose_1205x1205_10a784ab-c657-48ba-a8fe-081e4040a70d_1024x1024.jpg?v=1694423909'
  },
  {
    name: 'MiMi',
    category: 'Wine',
    subcategory: 'France',
    description: 'A charming rosé from the Côtes de Provence, often light and dry, with subtle flavors of red berries and a soft, elegant finish.',
    imageUrl: 'https://petergrahamwines.com/storage/media/fp001-2.jpg?t=1666617349'
  },
  {
    name: 'Notorious Pink',
    category: 'Wine',
    subcategory: 'France',
    description: 'A Grenache-based rosé, typically light and crisp, with a palate of red fruit, hints of peach, and a smooth finish.',
    imageUrl: 'https://bevmo.com/cdn/shop/products/d140925c-17a1-4e85-af40-9816b1e186b9.png?v=1698316295'
  },
  {
    name: 'Im the Boss, Cabernet Sauvignon',
    category: 'Wine',
    subcategory: 'France',
    description: 'A bold and full-bodied red wine, often showcasing the classic flavors of Cabernet Sauvignon with a rich, complex character.',
    imageUrl: 'https://www.wine-searcher.com/images/labels/82/79/11488279.jpg'
  },
  {
    name: 'Little Fuck, Malbec',
    category: 'Wine',
    subcategory: 'France',
    description: 'A bold and lush wine, with deep flavors of blackberry and plum, accented by a whisper of spice. Perfect for those who savor intensity in every sip.',
    imageUrl: 'https://www.gothamwines.com/images/sites/gothamwines/labels/vignobles-vellas-little-fuck-cahors-malbec_1.jpg'
  },
  {
    name: 'Chateneuf White Bordeaux',
    category: 'Wine',
    subcategory: 'France',
    description: 'A crisp and aromatic white, offering a refreshing blend of citrus and green apple notes with a minerally finish. Ideal for those who appreciate elegance and vibrancy.',
    imageUrl: 'https://tipxy.com/cdn/shop/products/90CDA82EAC1F1691000000008E6A4B41Herzog_Selection_-_Chateneuf_Semi_Dry_White_Bordeaux_600x600.jpg?v=1625927046'
  },
  {
    name: 'Chateneuf Rouge Sweet Red',
    category: 'Wine',
    subcategory: 'France',
    description: 'A delightful sweet red, bursting with flavors of ripe red fruits and a touch of honey. A perfect choice for indulging in the sweeter side of sophistication.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/Herzog-Selection-Chateneuf-Rouge_1000x.png?v=1568210767'
  },
  // Italy
  
  {
    name: 'Barolo',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A renowned Italian red wine from Piedmont, known for its deep flavors, robust tannins, and notes of cherry, tar, and roses.',
    imageUrl: 'https://marksandspencer.com.ph/cdn/shop/products/267496_1500x.jpg?v=1599723590'
  },
  {
    name: 'Zardini Amarone Della Valpolicella',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A rich and intense red wine from the Valpolicella region, characterized by its full body, dark fruit flavors, and notes of spice and chocolate.',
    imageUrl: 'https://www.wine-searcher.com/images/labels/70/84/10677084.jpg'
  },
  {
    name: 'Cantina Zaccagnini',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A winery known for producing a variety of wines, often including Montepulciano d\'Abruzzo, characterized by their robust flavors and smooth finish.',
    imageUrl: 'https://applejack.com/site/images/Cantina-Zaccagnini-Montepulciano-750-ml_1.png'
  },
  {
    name: 'Santa Margherita',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A winery famous for its Pinot Grigio, known for its fresh, crisp flavor profile with notes of green apple, citrus, and a clean finish.',
    imageUrl: 'https://static.specsonline.com/wp-content/uploads/2023/11/063298720020.jpg'
  },
  {
    name: 'Amicone',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A rich and full-bodied red wine, often made from dried grapes, offering concentrated flavors of dark fruit, spices, and a velvety texture.',
    imageUrl: 'https://schenkwinesusa.com/wp-content/uploads/2020/12/Wines-Italy-Amicone-Rosso.jpg.webp'
  },
  {
    name: 'Passi Mento',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A wine made using a partial drying process of the grapes, often resulting in a richer and more intense flavor profile, with notes of ripe fruit and spices.',
    imageUrl: 'https://www.elmaliquor.com/wp-content/uploads/2016/11/Pasqua-Passimento-Romeo-Juliet-Red-Wine-750ML.jpg'
  },
  {
    name: 'Cantina Zaccagnini Montepulciano d’Abruzzo 2020',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A vibrant red wine from Abruzzo, showcasing flavors of ripe berries and spices with a smooth finish.',
    imageUrl: 'https://www.marketviewliquor.com/mm5/graphics/00000001/ZACCAGNINIMONT750.jpg'
  },
  {
    name: 'Cantina Zaccagnini Pinot Grigio',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A refreshing and crisp white wine, featuring delicate floral notes and a clean, bright finish.',
    imageUrl: 'https://cdn.shoplightspeed.com/shops/634190/files/24554947/image.jpg'
  },
  {
    name: 'Palazzo Della Torre 2019',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'An elegant and structured red wine, with layers of dark fruit, chocolate, and a hint of vanilla.',
    imageUrl: 'https://www.winex.com/pub/media/catalog/product/cache/b00ee289322b1207e723b0580707214a/p/a/palazzodellatorreallegrini19.jpg'
  },
  {
    name: 'Santa Margherita Pinot Grigio',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A classic Italian Pinot Grigio, known for its vibrant acidity, and flavors of citrus and green apple.',
    imageUrl: 'https://www.binnys.com/globalassets/catalogs/binnys/13/1395/139500/139500.jpg?width=1000&height=1000&rmode=BoxPad&bgcolor=fff'
  },
  {
    name: 'Santa Margherita Rosé',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A delicate rosé with notes of red berries and a subtle floral undertone, leading to a refreshing finish.',
    imageUrl: 'https://thebestwinestore.com/cdn/shop/products/santa-margheritta-rose-regular_961x1227.jpg?v=1679778295'
  },
  {
    name: 'Santa Margherita Chianti',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A robust Chianti, offering a bouquet of red fruits, leather, and herbs, with a rich, full-bodied palate.',
    imageUrl: 'https://www.wine.com/product/images/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/126514fbs.jpg'
  },
  {
    name: 'Retro Primitivo di Manduria',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A deeply flavored red wine, characterized by its bold dark fruit flavors, spices, and a velvety texture.',
    imageUrl: 'https://lpwinesandliquors.com/cdn/shop/products/lp-wines-liquors-italy-red-wines-retro-primitivo-di-manduria-vintage-red-wine-750ml-29113604440147_1024x1024.jpg?v=1636052033'
  },
  {
    name: 'Apulia Primitivo di Manduria',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'Showcasing the richness of Apulia, this wine offers ripe fruit, sweet spices, and a smooth, lasting finish.',
    imageUrl: 'https://d3omj40jjfp5tk.cloudfront.net/product_details/63befc9938399f29eeacd539/primary_image/large.png?sig=cf0c3ab93b1fa6d880d48b30180c2fb627dee1614fb19716d843561b0a5ad697?format=square'
  },
  {
    name: 'Amicone 2018',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A concentrated and hearty red, with layers of cherry, plum, and hints of chocolate and vanilla.',
    imageUrl: 'https://www.internationalwinechallenge.com/canopy/images/wine_images/IWC/wine/2021/zoom/4556.jpg' 
  },
  {
    name: 'SottoVento Montepulciano d’Abruzzo',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A traditional red showcasing the depth of Montepulciano grapes, with robust tannins and a rich, fruity core.',
    imageUrl: 'https://torricantine.it/wp-content/uploads/2022/03/torri-cantine-sottovento-riserva-montepulciano-d-abruzzo-doc-03.jpg'
  },
  {
    name: 'Vecchio Marone',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A harmonious blend offering complexity and smoothness, with ripe fruit and a touch of spice.',
    imageUrl: 'https://cdn.localexpress.io/img/JyeicWbpavIiO3Ln1WJ3b0NyB3XlY1R2bUcvQ3cUUaZ50CV4aKt2YWbp9i5SZnFicmbwb3JCLiI6IScWbp9zVGZvXudWa2ZhB3cnYvUJxUNyaqhFWSQyAVFWbp9w5SZnLicmbXazJCpjIlpicnI7MwUjOCaiwCADN6I=0Xfw.png'
  },
  {
    name: 'Mi Amore Rosé',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'An enchanting rosé with a sweet profile, featuring vibrant fruit flavors and a lovely floral finish.',
    imageUrl: 'https://winenliquor.com/wp-content/uploads/mi-amore-rose-750ml.jpg'
  },
  {
    name: 'Mi Amore White',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A delightful white wine, sweet and aromatic, with notes of tropical fruit and honeysuckle.',
    imageUrl: 'https://winenliquor.com/wp-content/uploads/mi-amore-white-albana-di-romagna-docg.png'
  },
  {
    name: 'Mi Amore Red',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A luscious and sweet red wine, bursting with red fruit flavors and a hint of velvety smoothness.',
    imageUrl: 'https://www.bhliquors.com/media/catalog/product/cache/b456f9c06a31f834e13ba33f49c2d862/1/3/13357_EqEngTtY6c6Xx40k.jpg'
  },
  {
    name: 'Cavit Pinot Grigio',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A light and refreshing Pinot Grigio, known for its crisp acidity and clean taste, with notes of lemon and green apple.',
    imageUrl: 'https://www.wespeakwine.com/resize/Shared/Images/Product/Cavit-Pinot-Grigio-Delle-Venezie-2015-750ML/cavit_pg_bottle.jpg?bw=600&bh=600'
  },
  {
    name: 'Bartenura Moscato d\'Asti',
    category: 'Wine',
    subcategory: 'Italy',
    description: 'A sweet and effervescent Moscato, known for its floral and fruity aromas, with a light, refreshing palate.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/8158/8621/bartenura-moscato-dasti-docg-375ml__61603.1661917663.jpg?c=2'
  },

  // Kosher

  {
    name: 'Teperberg, Cabernet Sauvignon Semi Dry',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A semi-dry Cabernet Sauvignon from Teperberg, offering a balanced blend of fruitiness and mild sweetness, perfect for those who enjoy a slight hint of sugar in their red wine.',
    imageUrl: 'https://isratrade.ch/287-large_default/impression-cabernet-sauvignon-semi-dry.jpg'
  },
  {
    name: 'Teperberg Cabernet Sauvignon Dry',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A dry Cabernet Sauvignon from Teperberg that showcases the varietal\'s classic characteristics of dark fruit flavors and robust tannins, making it an excellent companion to hearty meals.',
    imageUrl: 'https://alwaystogether.community/cdn/shop/products/image_8e540a4e-e4be-4c6d-9d11-10e4dd35dec9_500x.jpg?v=1668765942'
  },
  {
    name: 'Teperberg Dry White Wine',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'This dry white wine from Teperberg is crisp and refreshing, with bright acidity and flavors of citrus and green apple, making it a versatile choice for pairing with a wide range of dishes.',
    imageUrl: 'https://www.burlingtonwineandspirits.com/images/sites/burlingtonwineandspirits/labels/teperberg-teperberg-vision-dry-white-kosher-mevushal_1.jpg'
  },
  {
    name: 'Zmora Cabernet Sauvignon Semi Sweet',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A semi-sweet Cabernet Sauvignon from Zmora, this wine combines the richness of red fruit flavors with a delightful sweetness, creating a pleasing and easy-drinking experience.',
    imageUrl: 'https://www.kawohl.de/media/image/5b/97/27/489009206_600x600.jpg'
  },
  {
    name: 'Jeunesse',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A line of wines known for their youthful, fresh character, often featuring fruity and approachable flavors.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-d4ygz9et8q/images/stencil/1280x1280/products/2239/664/Jeunesse__97956.1549305711.jpg?c=2'
  },
  {
    name: 'Bartenura',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'Famous for its Moscato, this brand offers a range of Italian wines, known for their crisp and refreshing profiles, with a focus on approachability and quality.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/8158/8621/bartenura-moscato-dasti-docg-375ml__61603.1661917663.jpg?c=2'
  },
  {
    name: 'Baron Herzog',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A respected producer of Kosher wines, offering a variety of styles, known for their quality and traditional winemaking techniques.',
    imageUrl: 'https://www.skyviewwine.com/media/catalog/product/b/a/baron-herzog-cabernet-sauvignon-15380-base-5ef8fdce9bafb0d83a212dc1e6d184de5de8252d.jpg?width=265&height=265&store=skyview_sv&image-type=image'
  },
  {
    name: 'Chateneuf',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A wine that might refer to Châteauneuf-du-Pape or a similarly styled wine, known for its robust flavors and complexity.',
    imageUrl: 'https://www.edsfinewines.com/wp-content/uploads/2022/05/Chateau-de-Nalys-Chateauneuf-du-Pape-Grand-Vin.jpg'
  },
  {
    name: 'Zmora',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A brand offering approachable and pleasant wines, often showcasing the fruit-forward and easy-drinking qualities of Israeli wines.',
    imageUrl: 'https://www.cambridgecellars.com.au/wp-content/uploads/2020/04/Segal-Zmora-750mL-12.99.jpeg'
  },
  {
    name: 'Rashi',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A producer of Kosher wines, offering a range of styles from sweet to dry, known for their accessibility and enjoyable profiles.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/Rashi-Claret-750_1000x.jpg?v=1573155019'
  },
  {
    name: 'Tsinandali',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A distinguished white wine from Georgia, typically made from Rkatsiteli and Mtsvane grapes, offering a balance of fruit, acidity, and oak.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/TS-1_530x@2x.jpg?v=1683579184'
  },
  {
    name: 'Saperavi',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A type of red wine from Georgia, made from the Saperavi grape, known for its deep color, strong tannins, and rich berry flavors.',
    imageUrl: 'https://georgianws.com/images/uploads/saperavi-reserve.jpg'
  },
  {
    name: 'Alazani Valley',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A semi-sweet wine from Georgia, often made from Rkatsiteli and Saperavi grapes, with a balance of sweetness and acidity.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/AD-1_1772x.jpg?v=1683580467'
  },
  {
    name: 'Wild Goat',
    category: 'Wine',
    subcategory: 'Kosher',
    description: 'A wine that likely emphasizes a robust and earthy profile, possibly featuring bold flavors and a strong character.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/products/merlotwildgoat_1000x.png?v=1585261034'
  },
  // Portugal
  {
    name: 'Sandman Fine Ruby Porto',
    category: 'Wine',
    subcategory: 'Portugal',
    description: 'A rich and fruity ruby port, known for its sweet and vibrant flavors, often enjoyed as an aperitif or dessert wine.',
    imageUrl: 'https://whiskeymix.com/cdn/shop/products/sandman-fine-ruby-porto-523855.jpg?v=1676516343'
  },
  {
    name: 'Presidential Porto Ruby',
    category: 'Wine',
    subcategory: 'Portugal',
    description: 'A classic ruby port, offering a balance of sweetness and fruitiness, often enjoyed on its own or in cocktails.',
    imageUrl: 'https://taylorswineshop.com/cdn/shop/products/presidential-porto-ruby-port-wine-taylors-shop-790_460x@2x.jpg?v=1649648535'
  },

  // Georgian
  {
    name: 'Palavani Merlot Dry Red',
    category: 'Wine',
    subcategory: 'Georgian',
    description: 'A dry red wine made from the Merlot grape, known for its smooth texture and balanced flavors.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/Mer-1_530x@2x.jpg?v=1684175888'
  },
  {
    name: 'Palavani Kakheti Dry Red',
    category: 'Wine',
    subcategory: 'Georgian',
    description: 'A dry red wine from the Kakheti region, often showcasing the unique terroir and grape varieties of Georgia.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/Kah-1_530x@2x.jpg?v=1684173375'
  },
  {
    name: 'GRW Tsinandali Dry Red',
    category: 'Wine',
    subcategory: 'Georgian',
    description: 'A dry red wine from the Tsinandali appellation, known for its balance of fruit, acidity, and oak.',
    imageUrl: 'https://imageproxy.wolt.com/menu/menu-images/626bc5fbd12d1d7945a8c065/87e9db42-d182-11ed-ab8b-06fbc99b9e4d_grw___kisi.jpeg'
  },
  {
    name: 'GRW Saperavi Dry Red',
    category: 'Wine',
    subcategory: 'Georgian',
    description: 'A dry red wine made from the Saperavi grape, known for its deep color, strong tannins, and rich berry flavors.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/Saperavi-1_1_530x@2x.jpg?v=1683578615'
  },
  {
    name: 'GRW Alazani Valley Semi-Sweet Red',
    category: 'Wine',
    subcategory: 'Georgian',
    description: 'A semi-sweet red wine from the Alazani Valley, often made from Rkatsiteli and Saperavi grapes, with a balance of sweetness and acidity.',
    imageUrl: 'https://kosherwinedirect.com/cdn/shop/files/AD-1_530x@2x.jpg?v=1683580467'
  },
  

];


function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');
  const [subCategories, setSubCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedSubCategory('All');
    if (category === 'Wine') {
      setSubCategories(['California', 'France', 'Italy', 'Kosher', 'Portugal', 'Georgian']);
    } else {
      setSubCategories([]);
    }
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'All' || product.category === selectedCategory) &&
           (selectedSubCategory === 'All' || product.subcategory === selectedSubCategory);
  });

  return (
    <div className="products-content">
      <div className="header-section">
        <div className="category-dropdown">
          <select onChange={handleCategoryChange} defaultValue="All">
            <option value="All">All Products</option>
            <option value="Tequila">Tequila</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Cognac">Cognac</option>
            <option value="Champagne">Champagne</option>
            <option value="Vodka">Vodka</option>
            <option value="Wine">Wine</option>
          </select>
        </div>
        {subCategories.length > 0 && (
          <div className="subcategory-dropdown">
            <select onChange={handleSubCategoryChange} defaultValue="All">
              <option value="All">Subcategories</option>
              {subCategories.map(subCategory => (
                <option key={subCategory} value={subCategory}>{subCategory}</option>
              ))}
            </select>
          </div>
        )}
        <h2 className="products-title">Our Products</h2>
      </div>

      <div className="products-info">
        {filteredProducts.map(({ name, description, imageUrl }, index) => (
          <div key={index} className="product-item">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-text">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;