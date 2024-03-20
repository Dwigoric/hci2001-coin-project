class Logger {
    constructor() {
        this.logs = []
        this.isGamer = false
    }

    set coordinates({ x, y }) {
        this._coordinates = { x, y }
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


        const distanceDiff = this.logs.length
            ? Math.sqrt(
                Math.pow(this._coordinates.x - this.logs[this.logs.length - 1].coordinates.x, 2) +
                Math.pow(this._coordinates.y - this.logs[this.logs.length - 1].coordinates.y, 2)
            )
            : 0

        const speed = this.logs.length ? distanceDiff / (timeDelta / 1000) : 0

        this.logs.push({ action, timestamp, timeDelta, message, coordinates: this._coordinates, distanceDiff, speed })
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

window.addEventListener('mousemove', (event) => {
    logger.coordinates = { x: event.clientX, y: event.clientY }
})

export default logger
