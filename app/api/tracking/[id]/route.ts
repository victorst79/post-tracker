import { NextResponse, type NextRequest } from 'next/server';

const CORREOS_URL = 'https://api1.correos.es/digital-services/searchengines/api/v1/';
const DEFAULT_LANGUAGE = 'EN';
const DEFAULT_SEARCH_TYPE = 'envio';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const { id } = params;

	if (!id) return NextResponse.json({ data: {}, error_msg: 'Invalid tracking number' }, { status: 400 });

	try {
		const res = await fetch(`${CORREOS_URL}?text=${id}&language=${DEFAULT_LANGUAGE}&searchType=${DEFAULT_SEARCH_TYPE}`, { method: 'GET' });
		const data = await res.json();
		console.log(data);
		if (!res.ok) {
			return NextResponse.json({ data: {}, error_msg: 'Internal Server Error' }, { status: 500 });
		}

		return NextResponse.json({ data: data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ data: {}, error_msg: 'Internal Server Error' }, { status: 500 });
	}
}
