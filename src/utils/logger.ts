export class Logger {

  static info(message: string) {
    console.log(`ℹ️ ${message}`);
  }

  static error(message: string) {
    console.log(`❌ ${message}`);
  }

  static step(message: string) {
    console.log(`➡️ ${message}`);
  }
}