import * as fs from "fs";
import * as path from "path";
import { t_generate_keys } from "./types/index";
import base_path from "./base_path";
const crypto = require("crypto");

const RSA = "rsa";

// this passphrase can be asked as input from user
const passphrase = "I had learned that some things are best kept secret.";

let options = {
	modulusLength: 1024 * 2,
	publicKeyEncoding: {
		type: "spki",
		format: "pem",
	},
	privateKeyEncoding: {
		type: "pkcs8",
		format: "pem",
		cipher: "aes-256-cbc",
		passphrase: passphrase,
	},
};

const generate_keys: t_generate_keys = (dir_path) => {
	const { publicKey, privateKey } = crypto.generateKeyPairSync(RSA, options);

	if (!fs.existsSync(path.join(base_path))) {
		fs.mkdirSync(base_path);
	}

	fs.writeFileSync(path.join(dir_path, "/public_key.txt"), publicKey, {
		encoding: "utf8",
	});

	fs.writeFileSync(path.join(dir_path, "/private_key.txt"), privateKey, {
		encoding: "utf8",
	});

	return true;
};

export default generate_keys;