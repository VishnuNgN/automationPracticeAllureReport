const { Utils } = require('../Utils/utils');

class LoginPage { 

    constructor(page){
        this.page = page; // page will be availble across the class
        this.utils = new Utils; 
    }
    async goTo() {
        const testData = await this.utils.getTestCaseDataSet();
        await this.page.goto(testData.urlLink);
    }
}
    
module.exports = {LoginPage};