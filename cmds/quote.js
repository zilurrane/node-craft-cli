const axios = require('axios')
const ora = require('ora')

module.exports = async () => {
    const spinner = ora().start();
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://api.quotable.io/random'
        });
        spinner.stop();
        console.log(`\n\t${response.data.content} - ${response.data.author}\n`);
    } catch (error) {
        spinner.stop();
        console.error(error);
    }
}
