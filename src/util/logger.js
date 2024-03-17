class Logger {
    constructor() {
        this.logs = []
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

    printLogCount() {
        console.log(`${this.logs.length} logs`)
    }

    exportAsJSON() {
        return JSON.stringify(this.logs)
    }
}

const logger = new Logger()

export default logger
