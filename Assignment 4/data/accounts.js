const fs = require('fs');
let obj = JSON.parse(fs.readFileSync('./data/lab5.json', 'utf8'));

const exportedMethods = {
  async getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let matchAccount;
        obj.forEach((account) => {
          if(account.id == id) {
            matchAccount = account
          }
        });
        if(!matchAccount) {
          reject(new Error("No account matching that id"));
        } else {
          resolve(matchAccount);
        }
      },5000);
    });
  },
}

module.exports = exportedMethods;
