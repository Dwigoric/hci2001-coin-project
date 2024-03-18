class Logger {
    constructor() {
        this.logs = []
        this.isGamer = false
    }

    log({ action, message }) {
        if (!action) {
            throw new Error('action is required')
        }
        if (!message) {
            throw new Error('message is required')
        }

        const timestamp = Date.now()
        const timeDelta = this.logs.length
            ? timestamp - this.logs[this.logs.length - 1].timestamp
            : 0
        this.logs.push({ action, timestamp, timeDelta, message })
    }

    setGamer() {
        this.isGamer = true
    }

    exportAsJSON() {
        return JSON.stringify({
            isGamer: this.isGamer,
            logs: this.logs
        }, null, 2)
    }
}

const logger = new Logger()

export default logger
