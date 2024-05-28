const Queue = require("bull");
const UserService = require("");

// const {
//     REDIS_HOST,
//     REDIS_PORT
// } = require("config");

class CreateUserService {
    constructor() {
        this.queue = new Queue("mailer", {
          redis: {
            host: REDIS_HOST,
            port: REDIS_PORT,
          },
        });
    
        this.queue.process((job) => EmailService.send(job.data));
      }
      
      async add(job) {
        await this.queue.add(job);
      }
    
}

module.exports = new CreateUserService();