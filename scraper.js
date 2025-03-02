const axios = require('axios'); 
const cheerio = require('cheerio'); 
 
// axios.get('https://www.scrapingcourse.com/ecommerce/') 
// 	.then(({ data }) => { 
// 		const $ = cheerio.load(data); 
 
// 		const productNames = $('.XUwMufC5NCgIyRMyGXLD') 
// 			.map((_, product) => { 
// 				const $product =  $product.find('.wozXSN04ZBOkhrsuY5i2 XUwMufC5NCgIyRMyGXLD'); 
// 				return $product
// 			}) 
// 			.toArray(); 
// 		console.log(productNames) 
// 	});


axios.get('https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ') 
	.then(({ data }) => { 
		const $ = cheerio.load(data);
        
        const $class = $('.XUwMufC5NCgIyRMyGXLD');

        console.log($class);
});
