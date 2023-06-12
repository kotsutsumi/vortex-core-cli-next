// route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const page = request.nextUrl.searchParams.get('page')
    const limit = request.nextUrl.searchParams.get('limit')

    const notes = await getAllNotes(Number(page), Number(limit))
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

export async function getAllNotes(page: number = 0, limit: number = 5) {
    const notes = await prisma.notes.findMany({
        skip: page * limit,
        take: limit
    })

    const count = await prisma.notes.count()

    return { rows: notes, total: count }
}

// EOF
