import CryptoJS from "crypto-js";

//Generate Initialization Vector (IV): An initialization vector (IV) is a
// random value used in conjunction in the secret key for encryption.
// Here, a random IV of 16 bytes (128 bits) is generated using CryptoJS.lib.WordArray.random(16).
const iv = CryptoJS.lib.WordArray.random(16);


const secretKey = process.env.REACT_APP_SECRET_KEY;

//Convert Secret Key to WordArray: CryptoJS requires the secret key to be in a specific format (WordArray) 
//for encryption and decryption.
// The secret key is parsed into a WordArray format using CryptoJS.enc.Utf8.parse(secretKey).
const keyutf = CryptoJS.enc.Utf8.parse(secretKey);

export const encryptData = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(data, keyutf, { iv }).toString();
    return encryptedData;
}
//Advanced Encryption Standard (AES)
export const decryptData = (data) => {
    const decryptedData = CryptoJS.AES.decrypt(data, keyutf, { iv }).toString();
    return decryptedData;
}