class Utils {

constructor (page) {

    this.page = page; 
}

    async getTestCaseDataSet(){
        const testData = JSON.parse(
            JSON.stringify(require("../data/inputData.json"))
        );
        return testData;
    }

}
module.exports = {Utils}