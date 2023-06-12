// admin.ts

import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

// load firebase secret key
const serviceAccount = require('/firebaseSecretKey.json')

// initialize firebase admin
export const firebaseAdmin =
    getApps()[0] ??
    initializeApp({
        credential: cert(serviceAccount)
    })

export const auth = getAuth()

// EOF
