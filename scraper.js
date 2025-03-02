const axios = require('axios'); 
axios.get('https://www.scrapingcourse.com/ecommerce/') 
	.then(({ data }) => console.log(data));
