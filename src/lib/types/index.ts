import { ChalkFunction } from 'chalk'

export type t_log = (fn: ChalkFunction, str: string) => void;

export type t_keys_exists_ret_obj = { exists: boolean, message: 'exists' | 'no_dir' | 'no_keys' | 'no_pub_key' | 'no_priv_key' }

export type t_keys_exists = () => t_keys_exists_ret_obj

export type t_generate_keys = (path: string) => void;
