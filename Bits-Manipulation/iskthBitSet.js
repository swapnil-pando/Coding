const number = 3;

const place = 2;

const place_number = Math.pow(2,place-1);

if ( !(number & place_number) ){
	console.log('Not Set');
} else{
	console.log('Set');
}