//@ts-check
const gradients = require('./data/gradients.json');
const fs = require('fs');

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const toLinear = (grad) => {
    var grad_array = grad.gradient;
    var color = [];

    grad_array.forEach((elem) => {
        color.push(` ${elem.color} ${elem.pos}%`);
    });
    return `background-image: linear-gradient(${grad.deg}deg,${color.toLocaleString()});`
}


/*
(() => {
    gradients.forEach((grad) => {
        named_linear_grad[grad.name] = toLinear(grad);
    });
    
})();
fs.writeFileSync('./data/named_linear.json', JSON.stringify(named_linear_grad));
*/


/**
 * Returns random linear Gradients
 * @module linear_random
 * @returns {string} - CSS Linear Gradient
 */
module.exports.linear_random = () => {
    var n = randomNumber(0, 173);
    return toLinear(gradients[n]);
}

/**
 * Export Linear Gradients With Their Names
 * @module linear
 * @returns {Object} - Complete Set Of Linear Gradients With Name And CSS
 */
module.exports.linear = {
    "Warm Flame": "background-image: linear-gradient(45, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
    "Night Fade": "background-image: linear-gradient(0, #a18cd1 0%, #fbc2eb 100%);",
    "Spring Warmth": "background-image: linear-gradient(0, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);",
    "Juicy Peach": "background-image: linear-gradient(90, #ffecd2 0%, #fcb69f 100%);",
    "Young Passion": "background-image: linear-gradient(90, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);",
    "Lady Lips": "background-image: linear-gradient(0, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);",
    "Sunny Morning": "background-image: linear-gradient(120, #f6d365 0%, #fda085 100%);",
    "Rainy Ashville": "background-image: linear-gradient(0, #fbc2eb 0%, #a6c1ee 100%);",
    "Frozen Dreams": "background-image: linear-gradient(0, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);",
    "Winter Neva": "background-image: linear-gradient(120, #a1c4fd 0%, #c2e9fb 100%);",
    "Dusty Grass": "background-image: linear-gradient(120, #d4fc79 0%, #96e6a1 100%);",
    "Tempting Azure": "background-image: linear-gradient(120, #84fab0 0%, #8fd3f4 100%);",
    "Heavy Rain": "background-image: linear-gradient(0, #cfd9df 0%, #e2ebf0 100%);",
    "Amy Crisp": "background-image: linear-gradient(120, #a6c0fe 0%, #f68084 100%);",
    "Mean Fruit": "background-image: linear-gradient(120, #fccb90 0%, #d57eeb 100%);",
    "Deep Blue": "background-image: linear-gradient(120, #e0c3fc 0%, #8ec5fc 100%);",
    "Ripe Malinka": "background-image: linear-gradient(120, #f093fb 0%, #f5576c 100%);",
    "Cloudy Knoxville": "background-image: linear-gradient(120, #fdfbfb 0%, #ebedee 100%);",
    "Malibu Beach": "background-image: linear-gradient(0, #4facfe 0%, #00f2fe 100%);",
    "New Life": "background-image: linear-gradient(0, #43e97b 0%, #38f9d7 100%);",
    "True Sunset": "background-image: linear-gradient(0, #fa709a 0%, #fee140 100%);",
    "Morpheus Den": "background-image: linear-gradient(0, #30cfd0 0%, #330867 100%);",
    "Rare Wind": "background-image: linear-gradient(0, #a8edea 0%, #fed6e3 100%);",
    "Near Moon": "background-image: linear-gradient(0, #5ee7df 0%, #b490ca 100%);",
    "Wild Apple": "background-image: linear-gradient(0, #d299c2 0%, #fef9d7 100%);",
    "Saint Petersburg": "background-image: linear-gradient(135, #f5f7fa 0%, #c3cfe2 100%);",
    "Arielles Smile": "background-image: linear-gradient(0, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);",
    "Plum Plate": "background-image: linear-gradient(135, #667eea 0%, #764ba2 100%);",
    "Everlasting Sky": "background-image: linear-gradient(135, #fdfcfb 0%, #e2d1c3 100%);",
    "Happy Fisher": "background-image: linear-gradient(120, #89f7fe 0%, #66a6ff 100%);",
    "Blessing": "background-image: linear-gradient(0, #fddb92 0%, #d1fdff 100%);",
    "Sharpeye Eagle": "background-image: linear-gradient(0, #9890e3 0%, #b1f4cf 100%);",
    "Ladoga Bottom": "background-image: linear-gradient(0, #ebc0fd 0%, #d9ded8 100%);",
    "Lemon Gate": "background-image: linear-gradient(0, #96fbc4 0%, #f9f586 100%);",
    "Itmeo Branding": "background-image: linear-gradient(180, #2af598 0%, #009efd 100%);",
    "Zeus Miracle": "background-image: linear-gradient(0, #cd9cf2 0%, #f6f3ff 100%);",
    "Old Hat": "background-image: linear-gradient(0, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);",
    "Star Wine": "background-image: linear-gradient(0, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);",
    "Blue Velvet": "background-image: linear-gradient(0, #6a11cb 0%, #2575fc 100%);",
    "Happy Acid": "background-image: linear-gradient(0, #37ecba 0%, #72afd3 100%);",
    "Awesome Pine": "background-image: linear-gradient(0, #ebbba7 0%, #cfc7f8 100%);",
    "New York": "background-image: linear-gradient(0, #fff1eb 0%, #ace0f9 100%);",
    "Shy Rainbow": "background-image: linear-gradient(0, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%);",
    "Mixed Hopes": "background-image: linear-gradient(0, #c471f5 0%, #fa71cd 100%);",
    "Fly High": "background-image: linear-gradient(0, #48c6ef 0%, #6f86d6 100%);",
    "Strong Bliss": "background-image: linear-gradient(0, #f78ca0 0%, #f9748f 19%, #fd868c 60%);",
    "Fresh Milk": "background-image: linear-gradient(0, #feada6 0%, #f5efef 100%);",
    "Snow Again": "background-image: linear-gradient(0, #e6e9f0 0%, #eef1f5 100%);",
    "February Ink": "background-image: linear-gradient(0, #accbee 0%, #e7f0fd 100%);",
    "Kind Steel": "background-image: linear-gradient(-20, #e9defa 0%, #fbfcdb 100%);",
    "Soft Grass": "background-image: linear-gradient(0, #c1dfc4 0%, #deecdd 100%);",
    "Grown Early": "background-image: linear-gradient(0, #0ba360 0%, #3cba92 100%);",
    "Sharp Blues": "background-image: linear-gradient(0, #00c6fb 0%, #005bea 100%);",
    "Shady Water": "background-image: linear-gradient(0, #74ebd5 0%, #9face6 100%);",
    "Dirty Beauty": "background-image: linear-gradient(0, #6a85b6 0%, #bac8e0 100%);",
    "Great Whale": "background-image: linear-gradient(0, #a3bded 0%, #6991c7 100%);",
    "Teen Notebook": "background-image: linear-gradient(0, #9795f0 0%, #fbc8d4 100%);",
    "Polite Rumors": "background-image: linear-gradient(0, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);",
    "Sweet Period": "background-image: linear-gradient(0, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);",
    "Wide Matrix": "background-image: linear-gradient(0, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);",
    "Soft Cherish": "background-image: linear-gradient(0, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);",
    "Red Salvation": "background-image: linear-gradient(0, #f43b47 0%, #453a94 100%);",
    "Burning Spring": "background-image: linear-gradient(0, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 80%, #432c39 100%);",
    "Night Party": "background-image: linear-gradient(0, #0250c5 0%, #d43f8d 100%);",
    "Sky Glider": "background-image: linear-gradient(0, #88d3ce 0%, #6e45e2 100%);",
    "Heaven Peach": "background-image: linear-gradient(0, #d9afd9 0%, #97d9e1 100%);",
    "Purple Division": "background-image: linear-gradient(0, #7028e4 0%, #e5b2ca 100%);",
    "Aqua Splash": "background-image: linear-gradient(15, #13547a 0%, #80d0c7 100%);",
    "Above Clouds": "background-image: linear-gradient(0, #BDBBBE 0%, #9D9EA3 100%);",
    "Spiky Naga": "background-image: linear-gradient(0, #505285 0%, #585e92 12%, #65689f 25%);",
    "Love Kiss": "background-image: linear-gradient(0, #ff0844 0%, #ffb199 100%);",
    "Clean Mirror": "background-image: linear-gradient(45, #93a5cf 0%, #e4efe9 100%);",
    "Premium Dark": "background-image: linear-gradient(0, #434343 0%, #000000 100%);",
    "Cold Evening": "background-image: linear-gradient(0, #0c3483 0%, #a2b6df 100%, #6b8cce 100%);",
    "Cochiti Lake": "background-image: linear-gradient(45, #93a5cf 0%, #e4efe9 100%);",
    "Summer Games": "background-image: linear-gradient(0, #92fe9d 0%, #00c9ff 100%);",
    "Passionate Bed": "background-image: linear-gradient(0, #ff758c 0%, #ff7eb3 100%);",
    "Mountain Rock": "background-image: linear-gradient(0, #868f96 0%, #596164 100%);",
    "Desert Hump": "background-image: linear-gradient(0, #c79081 0%, #dfa579 100%);",
    "Jungle Day": "background-image: linear-gradient(45, #8baaaa 0%, #ae8b9c 100%);",
    "Phoenix Start": "background-image: linear-gradient(0, #f83600 0%, #f9d423 100%);",
    "October Silenceiver": "background-image: linear-gradient(-20, #b721ff 0%, #21d4fd 100%);",
    "Faraway River": "background-image: linear-gradient(-20, #6e45e2 0%, #88d3ce 100%);",
    "Alchemist Lab": "background-image: linear-gradient(-20, #d558c8 0%, #24d292 100%);",
    "Over Sun": "background-image: linear-gradient(60, #abecd6 0%, #fbed96 100%);",
    "Premium White": "background-image: linear-gradient(0, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%);",
    "Mars Party": "background-image: linear-gradient(0, #5f72bd 0%, #9b23ea 100%);",
    "Eternal Constance": "background-image: linear-gradient(0, #09203f 0%, #537895 100%);",
    "Japan Blush": "background-image: linear-gradient(-20, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);",
    "Smiling Rain": "background-image: linear-gradient(-20, #dcb0ed 0%, #99c99c 100%);",
    "Cloudy Apple": "background-image: linear-gradient(0, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);",
    "Big Mango": "background-image: linear-gradient(0, #c71d6f 0%, #d09693 100%);",
    "Healthy Water": "background-image: linear-gradient(60, #96deda 0%, #50c9c3 100%);",
    "Amour Amour": "background-image: linear-gradient(0, #f77062 0%, #fe5196 100%);",
    "Risky Concrete": "background-image: linear-gradient(0, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);",
    "Strong Stick": "background-image: linear-gradient(0, #a8caba 0%, #5d4157 100%);",
    "Vicious Stance": "background-image: linear-gradient(60, #29323c 0%, #485563 100%);",
    "Palo Alto": "background-image: linear-gradient(-60, #16a085 0%, #f4d03f 100%);",
    "Happy Memories": "background-image: linear-gradient(-60, #ff5858 0%, #f09819 100%);",
    "Midnight Bloom": "background-image: linear-gradient(-20, #2b5876 0%, #4e4376 100%);",
    "Crystalline": "background-image: linear-gradient(-20, #00cdac 0%, #8ddad5 100%);",
    "Raccoon Back": "background-image: linear-gradient(-180, #BCC5CE 0%, #929EAD 98%);",
    "Party Bliss": "background-image: linear-gradient(0, #4481eb 0%, #04befe 100%);",
    "Confident Cloud": "background-image: linear-gradient(0, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);",
    "Le Cocktail": "background-image: linear-gradient(45, #874da2 0%, #c43a30 100%);",
    "River City": "background-image: linear-gradient(0, #4481eb 0%, #04befe 100%);",
    "Frozen Berry": "background-image: linear-gradient(0, #e8198b 0%, #c7eafd 100%);",
    "Elegance": "background-image: linear-gradient(0, #EADFDF 59%, #ECE2DF 100%);",
    "Child Care": "background-image: linear-gradient(-20, #f794a4 0%, #fdd6bd 100%);",
    "Flying Lemon": "background-image: linear-gradient(60, #64b3f4 0%, #c2e59c 100%);",
    "New Retrowave": "background-image: linear-gradient(0, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);",
    "Hidden Jaguar": "background-image: linear-gradient(0, #0fd850 0%, #f9f047 100%);",
    "Above The Sky": "background-image: linear-gradient(0, #d3d3d3 0%, #d3d3d3 1%, #e0e0e0 26%);",
    "Nega": "background-image: linear-gradient(45, #ee9ca7 0%, #ffdde1 100%);",
    "Dense Water": "background-image: linear-gradient(0, #3ab5b0 0%, #3d99be 31%, #56317a 100%);",
    "Seashore": "background-image: linear-gradient(0, #209cff 0%, #68e0cf 100%);",
    "Marble Wall": "background-image: linear-gradient(0, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);",
    "Cheerful Caramel": "background-image: linear-gradient(0, #e6b980 0%, #eacda3 100%);",
    "Night Sky": "background-image: linear-gradient(0, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);",
    "Magic Lake": "background-image: linear-gradient(0, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%);",
    "Young Grass": "background-image: linear-gradient(0, #9be15d 0%, #00e3ae 100%);",
    "Colorful Peach": "background-image: linear-gradient(0, #ed6ea0 0%, #ec8c69 100%);",
    "Gentle Care": "background-image: linear-gradient(0, #ffc3a0 0%, #ffafbd 100%);",
    "Plum Bath": "background-image: linear-gradient(0, #cc208e 0%, #6713d2 100%);",
    "Happy Unicorn": "background-image: linear-gradient(0, #b3ffab 0%, #12fff7 100%);",
    "Full Metal": "background-image: linear-gradient(0, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%);",
    "African Field": "background-image: linear-gradient(0, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%);",
    "Solid Stone": "background-image: linear-gradient(0, #243949 0%, #517fa4 100%);",
    "Orange Juice": "background-image: linear-gradient(-20, #fc6076 0%, #ff9a44 100%);",
    "Glass Water": "background-image: linear-gradient(0, #dfe9f3 0%, #ffffff 100%);",
    "North Miracle": "background-image: linear-gradient(0, #00dbde 0%, #fc00ff 100%);",
    "Fruit Blend": "background-image: linear-gradient(0, #f9d423 0%, #ff4e50 100%);",
    "Millennium Pine": "background-image: linear-gradient(0, #50cc7f 0%, #f5d100 100%);",
    "High Flight": "background-image: linear-gradient(0, #0acffe 0%, #495aff 100%);",
    "Mole Hall": "background-image: linear-gradient(-20, #616161 0%, #9bc5c3 100%);",
    "Space Shift": "background-image: linear-gradient(60, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);",
    "Forest Inei": "background-image: linear-gradient(0, #df89b5 0%, #bfd9fe 100%);",
    "Royal Garden": "background-image: linear-gradient(0, #ed6ea0 0%, #ec8c69 100%);",
    "Rich Metal": "background-image: linear-gradient(0, #d7d2cc 0%, #304352 100%);",
    "Juicy Cake": "background-image: linear-gradient(0, #e14fad 0%, #f9d423 100%);",
    "Smart Indigo": "background-image: linear-gradient(0, #b224ef 0%, #7579ff 100%);",
    "Sand Strike": "background-image: linear-gradient(0, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);",
    "Norse Beauty": "background-image: linear-gradient(0, #ec77ab 0%, #7873f5 100%);",
    "Aqua Guidance": "background-image: linear-gradient(0, #007adf 0%, #00ecbc 100%);",
    "Sun Veggie": "background-image: linear-gradient(-225, #20E2D7 0%, #F9FEA5 100%);",
    "Sea Lord": "background-image: linear-gradient(-225, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);",
    "Black Sea": "background-image: linear-gradient(-225, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);",
    "Grass Shampoo": "background-image: linear-gradient(-225, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%);",
    "Landing Aircraft": "background-image: linear-gradient(-225, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);",
    "Witch Dance": "background-image: linear-gradient(-225, #A8BFFF 0%, #884D80 100%);",
    "Sleepless Night": "background-image: linear-gradient(-225, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);",
    "Angel Care": "background-image: linear-gradient(-225, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);",
    "Crystal River": "background-image: linear-gradient(-225, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);",
    "Soft Lipstick": "background-image: linear-gradient(-225, #B6CEE8 0%, #F578DC 100%);",
    "Salt Mountain": "background-image: linear-gradient(-225, #FFFEFF 0%, #D7FFFE 100%);",
    "Perfect White": "background-image: linear-gradient(-225, #E3FDF5 0%, #FFE6FA 100%);",
    "Fresh Oasis": "background-image: linear-gradient(-225, #7DE2FC 0%, #B9B6E5 100%);",
    "Strict November": "background-image: linear-gradient(-225, #CBBACC 0%, #2580B3 100%);",
    "Morning Salad": "background-image: linear-gradient(-225, #B7F8DB 0%, #50A7C2 100%);",
    "Deep Relief": "background-image: linear-gradient(-225, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%);",
    "Sea Strike": "background-image: linear-gradient(-225, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);",
    "Night Call": "background-image: linear-gradient(-225, #AC32E4 0%, #7918F2 48%, #4801FF 100%);",
    "Supreme Sky": "background-image: linear-gradient(-225, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);",
    "Light Blue": "background-image: linear-gradient(-225, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);",
    "Mind Crawl": "background-image: linear-gradient(-225, #473B7B 0%, #3584A7 51%, #30D2BE 100%);",
    "Lily Meadow": "background-image: linear-gradient(-225, #65379B 0%, #886AEA 53%, #6457C6 100%);",
    "Sugar Lollipop": "background-image: linear-gradient(-225, #A445B2 0%, #D41872 52%, #FF0066 100%);",
    "Sweet Dessert": "background-image: linear-gradient(-225, #7742B2 0%, #F180FF 52%, #FD8BD9 100%);",
    "Magic Ray": "background-image: linear-gradient(-225, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);",
    "Teen Party": "background-image: linear-gradient(-225, #FF057C 0%, #8D0B93 50%, #321575 100%);",
    "Frozen Heat": "background-image: linear-gradient(-225, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);",
    "Gagarin View": "background-image: linear-gradient(-225, #69EACB 0%, #EACCF8 48%, #6654F1 100%);",
    "Fabled Sunset": "background-image: linear-gradient(-225, #231557 0%, #44107A 29%, #FF1361 67%);",
    "Perfect Blue": "background-image: linear-gradient(-225, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);"
}