import * as fs from 'fs'

const rm_dir = (path: fs.PathLike) => {
	fs.rmSync(path, { recursive: true })
}

export default rm_dir