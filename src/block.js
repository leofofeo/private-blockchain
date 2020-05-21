class Block {
	constructor(data) {
		(this.hash = ''),
			(this.confirmations = 0),
			(this.height = 0),
			(this.body = data),
			(this.time = 0),
			(this.previousBlockHash = '');
	}
}
