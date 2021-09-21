import { Command, flags } from '@oclif/command'
import { base_path, generate_keys, keys_exists } from '../lib'
import cli_ux, { cli } from 'cli-ux'

export default class Init extends Command {
	static description = 'initialize your wallet with new pairs of keys'

	static examples = [
		`$ hwallet init`,
	]

	static flags = {
		help: flags.help({ char: 'h' }),
	}

	static args = []

	async run() {
		if (keys_exists(base_path).exists) {
			cli_ux.log('Keys already exists in this walet ⚠️')
			const choice = await cli_ux.confirm('are u sure u want to purge the old keys and generate new one? (yes/no) ');
			if (!choice) {
				cli.log('wallet creatiion aborted ⛔️')
				return;
			}
		}

		cli.action.start('generating keys')
		await generate_keys(base_path)
		cli.action.stop('keys generated succesfully 🎉 Enjoy HWallet 🚀')
	}
}