import { MetaMaskSDK } from '@metamask/sdk';

/** 메세지를 16진수 암호화 하는 라이브러리 */
import hexerTs from "util/browser-string-hexer";


const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

export default function metaMaskHandler () {
	// console.log(ethereum.isConnected());
	return;
}