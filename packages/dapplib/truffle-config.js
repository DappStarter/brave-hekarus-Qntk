require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski story crawl pulse comic install office army giant'; 
let testAccounts = [
"0xc3e57732b750cf2b2d183ea9bce6824a2ff796744f94163ef251acff271a1e66",
"0xc55a85b5455c93edf6d7c9ed3d830159c77fb968129859a463e8bbb2046e5cd8",
"0x589d3b01b027d42b2b1a0177cd6f695cdc17f184b2de08f82fb0f713604fdc73",
"0xe467aba010127796e95604403e6de059aed52ce72122c917fbe445aa3970862a",
"0xd5a0b06c3ed64ea2efa9af615fdab8de09382ae62dddd8f8ee0f186a3994e110",
"0xc6c95648bf51db9d686b1afc5ea6c66f1bd17d472f3e35b646efbdf641a94c32",
"0xfca2ac6e1aa5eceb459ee6bc93c0685fd1fb09ee93897b1ac9051d6a7b2e1763",
"0x46415628b129c3bec23d3ea92a24cf277dda7ec2f6ea2985b1d79db294258a88",
"0x56df5a7118a2876e992f70579753fabbe924f29c8a89554206f178347ca3b518",
"0xf2386c09fec4c98199a779bd7e57817bb740e792b63bfa3c4352166f7e1f93b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


