require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name recipe saddle concert grace dry equal giggle'; 
let testAccounts = [
"0x3af6c1ff4867c36429456df20868e57e5420e54560422fdd58acb8410f5866d9",
"0x46bc6be248573fbc71a32fa2f6a40ad973dde7f5b89b81ceeadace4370059b33",
"0x921eb84ca7d8b642afa3c29c4467aa0544b360053b7cfee4f25fef5b6d017a9a",
"0x9209c182ab466df086fa5c6cc146eb9c9d243f32937e5ef797eedcc3c75f0927",
"0x40497d529b5bc37c9865c0be4e067185940ea769bfc92174a4768530ce15d2d3",
"0xe41f62ec9018b3f38888098518f178e8cfa527d094d8613352e51386e2f171b0",
"0xf23e66609f3aee543829381ddc2fb6394de869bedb9ee387e9f8ccb0aa026a3f",
"0xa335bb30182045322ab62119f870d5ec9dbae7333ee28b6f6e79f94a8237cff7",
"0x698eec18a69b9bf39a60e1cc74cb9e12a8b0f274183064ee9d68540c5ad4abe2",
"0x7c825e8dc5dd9293f84d8e7825f7d171533f552238079f618fec74227fed345a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

