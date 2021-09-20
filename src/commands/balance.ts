import { Command, flags } from '@oclif/command'

export default class Balance extends Command {
	static description = `get the balance for ur Wallet's Address`

	static examples = [
		`$ hwallet balance\n Hey there 👋 Your Balance is xyz HC!`,
	]

	static flags = {
		help: flags.help({ char: 'h' }),
	}

	static usage = "balance"

	async run() {
		const { args, flags } = this.parse(Balance)
		console.log(args)
		console.log(`Hey there 👋 Your Balance is xyz HC!`,)
	}
}