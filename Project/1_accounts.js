const { ethers } = require("ethers");

const INFURA_ID = 'dede998fb04f400792ab02a4db712640'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()
