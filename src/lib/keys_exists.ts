import * as fs from "fs";
import * as path from "path";

import basepath from "./base_path";
import { t_keys_exists, t_keys_exists_ret_obj } from "./types/index";

const keys_exists: t_keys_exists = (dir_name) => {

	const base_path = dir_name ?? basepath // dir_name is passed for testing this utility

	const ret_object: t_keys_exists_ret_obj = { exists: true, message: 'exists' }

	const pub_key_exists = fs.existsSync(path.join(base_path, "/public_key.key"));
	const priv_key_exists = fs.existsSync(path.join(base_path, "/private_key.key"));

	const keys_exists = pub_key_exists && priv_key_exists;

	if (!keys_exists) {
		if (!fs.existsSync(path.join(base_path))) {
			ret_object['message'] = "no_dir";
		}

		else if (!(pub_key_exists || priv_key_exists)) {
			ret_object['message'] = "no_keys";
		}

		else {
			if (!pub_key_exists) ret_object["message"] = 'no_pub_key'
			if (!priv_key_exists)
				ret_object["message"] = "no_priv_key"
		}

		ret_object['exists'] = false
	}

	return ret_object
};

export default keys_exists;