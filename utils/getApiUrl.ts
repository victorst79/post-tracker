function getApiUrl(orderId: string) {
	const originCountry: string = orderId.slice(-2);
	console.log(originCountry);

	return true;
}

export default getApiUrl;
