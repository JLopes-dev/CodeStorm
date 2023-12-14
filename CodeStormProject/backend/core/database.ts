import mongoose, { ConnectOptions, connect, connection } from "mongoose";

type connectionType = (uri: string, options?: ConnectOptions | undefined) => Promise<typeof mongoose>;

class Database {
  private connect: connectionType;

  constructor(connect: connectionType) {
    this.connect = connect;
  }

  protected async connectDB(uri: string) {
    return await this.connect(uri);
  }
}

export default class DatabaseInput extends Database {

  private async tryingtoConnect(uri: string){
   try {
    return await this.connectDB(uri);
   } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error}`);
   }
  }

  public async runDB(uri: string) {
    let attempts = 0;
    const maxAttempts = 5;
    const disconnectedState = 0
    
    while (connection.readyState === disconnectedState && attempts < maxAttempts) {
      await this.tryingtoConnect(uri);
      attempts++;
    }
  }
}
