// getTextareaCurrentLine.ts

function getCursorLinePos(pos: number | null, text: string) {
    if (pos === null) {
        return [-1, -1]
    }

    const lines = text.split('\n')
    const charCounts = lines.map((line) => line.length + 1)

    if (charCounts.length > 0 && charCounts[0] > 0) {
        charCounts[0] -= 1
    }

    let cur = 0
    let sum = 0

    for (let i = 0; i < charCounts.length; i++) {
        sum += charCounts[i]
        if (pos <= sum) {
            cur = i + 1
            break
        }
    }

    return cur - 1

    //
}

export default (t: HTMLInputElement | null) => {
    if (t === null) {
        return
    }

    return getCursorLinePos(t?.selectionEnd, t?.value)

    //
}

// EOF
