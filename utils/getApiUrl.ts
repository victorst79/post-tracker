import * as API from '@/config/API.json';

type APIType = {
	[key: string]: string;
};

function getApiUrl(orderId: string): string | undefined {
	const originCountry: string = orderId.slice(-2);
	return (API as APIType)[originCountry];
}

export default getApiUrl;
