import { NextResponse, type NextRequest } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function PATCH(req: NextRequest) {
    try {
        const { email, feedback, trackID } = await req.json();
        const dateSubmitted = new Date().toISOString();

        if (!email || !feedback || !trackID) {
            return NextResponse.json({ message: 'Email, feedback, and trackID are required' }, { status: 400 });
        }

        const feedbackTableId = process.env.FEEDBACK_TABLE_ID;

        if (!feedbackTableId) {
            throw new Error('Feedback table ID is not defined.');
        }

        const response = await notion.pages.create({
            parent: {
                database_id: feedbackTableId,
            },
            properties: {
                "email": { "title": [{ "text": { "content": email } }] },
                "feedback": { "rich_text": [{ "text": { "content": feedback } }] },
                "date_submitted": { "rich_text": [{ "text": { "content": dateSubmitted } }] },
                "track_id": { "rich_text": [{ "text": { "content": trackID } }] }
            }
        });
        return NextResponse.json({ message: 'Feedback updated successfully!', result: response }, { status: 200 });

    } catch (error) {
        console.error('Error updating feedback:', error);
        console.error('Request props:', req.json())
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
