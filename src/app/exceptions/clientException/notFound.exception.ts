class NotFoundException extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'NOT-FOUND-EXCEPTION'
    }
}

export default NotFoundException