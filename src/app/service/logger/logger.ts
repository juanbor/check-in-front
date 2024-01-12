export class Logger {
  private static instance: Logger | undefined = undefined
  private LOG_ENABLED = true

  constructor() {}

  public static getInstance = () => {
    if (Logger.instance === undefined) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  info(message: any) {
    if (this.LOG_ENABLED) {
      console.log(message)
    }
  }
}