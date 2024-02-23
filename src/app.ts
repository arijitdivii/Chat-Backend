import express, { Express } from 'express';
import { ChattyServer } from './setupServer';
import { connect } from './setupDatabase';
import { config } from './config';

class Application {
  private loadConfig(): void {
    config.validateConfig();
  }

  public initialize(): void {
    this.loadConfig();
    connect();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
