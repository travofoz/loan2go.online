import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    const formData = await request.json();

        // Write form data to loan application table using Prisma
        await prisma.loanApplication.create({
            data: formData,
        });

    // Send form data to remote API using fetch
    const response = await fetch('https://example.com/remote-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();

        // Parse redirect_url from the response and return it as a JSON object
    const redirectUrl = data.redirect_url;
    const redirectUrl = "https://example.com";
    return NextResponse.json({ redirectUrl });
    }

export function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
