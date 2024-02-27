import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/utils/firebase"

export async function GET(_, { params }) {
    const { slug } = params

    const docRef = doc(db, "productos", slug)
    const docSnapshot = await getDoc(docRef)

    
    if (docSnapshot.exists() && docSnapshot.data()) {
        
        const data = docSnapshot.data();
        return NextResponse.json(data);
    } else {
        
        return NextResponse.json({ error: 'Documento no encontrado o sin datos' }, { status: 404 });
    }
}
