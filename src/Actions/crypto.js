// Nodejs encryption with CTR
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
    
var encryption = {
    encrypt: (decryptedStr, key) => {
        // decryptedArray = decryptedStr.split(" ");
        // encryptedStr = "";
        // toAsciiCode = 0;
        
        // for (var i = 0; i < decryptedStr.length; i++) {
        //     toAsciiCode = decryptedStr[i].charCodeAt(0);
        //     newAsciiCode = toAsciiCode + key;
           
        //     fromAsciiCode = String.fromCharCode(newAsciiCode);
        //     encryptedStr += fromAsciiCode;
        // }

        // console.log (decryptedStr);
        // return encryptedStr;
        console.log ("decrypted text is: ", decryptedStr);
        var cipher = crypto.createCipher(algorithm, password)
        var crypted = cipher.update(decryptedStr,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    },
    decrypt: (encryptedStr, key) => {
        // encryptedStr = encryptedStr.split("");
        // decryptedStr = "";
        // toAsciiCode = 0;

        // for (var i = 0; i < encryptedStr.length; i++) {
        //     toAsciiCode = encryptedStr[i].charCodeAt(0);
        //     originAsciiCode = toAsciiCode - key;
        
        //     fromAsciiCode = String.fromCharCode(originAsciiCode);

        //     decryptedStr += fromAsciiCode;
        // }
        // console.log (encryptedStr);
        // return decryptedStr;
        // encryptedStr = "268fc693247d777e3109ed1eb2f7149ef34d81a7c4a7c96175a41573888c6b2fde71d0d49a9b9e08c5872032f73cd9c6a80de8b65d41e231cfaea0e76c7dd024ad497ac9fdaadcfaa8e7b28ee4f4185891f9f783d4b3d6c3d38b9cbf019cf474af4192fde13839e9af03c52c91bcb447e745811a650ac525041058ce00d90b9a21268936b542c47cf7c842bb222ac33601ecff3776f448e4fa6d9fcab91ebab8b48003974858052ff96088fc7a8e3e8c888d53866e11e9db1e0717ba0fb67e6bd4de6883c52139ee84cb4b67d4de2e14a93e90ba6910437789128818c0ce3bbe7d7a418568b115d5b7015d168e9cbe4872ef83f06e14797a63494239f953b0a3d70df3dc4cd754ca272dcd12c3b9941ef8a2acc05cda1f4524f0caeb31099524e623022e1f4e3bbfd3a25d23d26089085c2d0bc159f60ba7e6ec5f95fed1dd1c55308fd0247cf2396f0a9620c3e9d7c570466d21c84592e8ceef2a8de46cfe1b0b8652565ac32cc9b30f1070cd521eeaa59d3c7e6eab61e7b107c784715a8f8b365da07285bd3724ce1eac0a46660a8d851ecb7270568158e2aaaa4622e44621ad805f88e20c12f90f03093558d35a9855fc6993be902ca6107f6e612aafe1fdd3bece8b80e72d87630b5a3e30fc60235f3be43ddf1fa09ea8be1a582d83f589836ba528f0d0f2c8185f6735bf8fc2c8c932024c69ca26ac6ba046e98724b0a2ee0dab5b7e6418069a70c48a46ad569edd09f676b78c8cc9e65875c0f62c87e96f825f8403715706d8b8b926dc4375746141a62fc3c6b69eff2f114b46949bc0c706896891dc09fd0082629c63dec43bfb5033c2405c1898402d3d6109c8f4d88fd46d40c17093c2cf9de47dadc513f1ef341b1392cf2408f4e9769b49f96a913e3727d073e9012ddb4b0490c8a63c7b5758a941ffd632e4340ae57edb415b9abf31f19b283ab2c042f91f56b594366384be0aea6e8b324ee19216b5a52fa18f3099f41f216e23c6e0b4a96785de713043f90a9506fde83092be0c4e6968209402a6b5755fb9c476444e15ba8461b8f245a7779707a259ffa910cf77fd279d25ba127a8dccfa25cd0411a0344670dd1650beb3aa99cc";

        console.log ("encrypted text is: ", encryptedStr);

        var decipher = crypto.createDecipher(algorithm, password)
        var dec = decipher.update(encryptedStr,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }
}

module.exports = encryption;
