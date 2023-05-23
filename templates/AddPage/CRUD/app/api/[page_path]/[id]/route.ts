// route.ts

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getAllNotes } from '../route'

const prisma = new PrismaClient()

export async function GET(
    req: NextRequest,
    params: { params: { id: string } }
) {
    const data = await prisma.notes.findFirst({
        where: {
            id: parseInt(params.params.id)
        }
    })

    return NextResponse.json(data)
}

export async function PUT(
    req: NextRequest,
    params: { params: { id: string } }
) {
    const body = await req.json()
    const { content } = body

    const updateNote = await prisma.notes.update({
        where: {
            id: parseInt(params.params.id)
        },
        data: {
            content: content
        }
    })

    return NextResponse.json({
        success: true,
        data: updateNote
    })
}

export async function DELETE(
    req: NextRequest,
    params: { params: { id: string } }
) {
    await prisma.notes.delete({
        where: {
            id: parseInt(params.params.id)
        }
    })

    return NextResponse.json(getAllNotes())
}

// EOF
