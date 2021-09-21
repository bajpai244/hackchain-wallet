import * as assert from 'assert'
import { mkdirSync, PathLike } from 'fs'
import * as path from 'path'

import { generate_keys, keys_exists, log } from '../src/lib/index'
import { rm_dir } from './utlis/index'


describe('check the generate keys utility!', () => {

	const dir_name: PathLike = path.join(__dirname, 'data/keys')

	console.log('dir_name is =', dir_name)

	describe('#test_case 1', function () {

		it('this tests whether it can generate keys if no `keys` folder exists', function () {
			generate_keys(dir_name)
			assert.strictEqual(keys_exists(dir_name).exists, true)
		})

		after(() => {
			rm_dir(dir_name)
		})
	})

	describe('#test_case 2', function () {

		before(() => { mkdirSync(dir_name) })

		it('this tests whether it can generate keys if `keys` folder exists', function () {
			generate_keys(dir_name)
			assert.strictEqual(keys_exists(dir_name).exists, true)
		})

		after(() => {
			rm_dir(dir_name)
		})
	})
})
