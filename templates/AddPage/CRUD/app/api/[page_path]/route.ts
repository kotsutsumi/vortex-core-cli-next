// route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const notes = await getAllNotes()
    return NextResponse.json(notes)
}

export async function POST(request: NextRequest) {
    const { content } = await request.json()

    await prisma.notes.create({
        data: {
            content: content
        }
    })

    const notes = await getAllNotes()
    return NextResponse.json(notes)
}

export async function getAllNotes() {
    const notes = await prisma.notes.findMany()
    return notes
}

// EOF
