


"use client";  // This makes the component a Client Component
import { useParams } from "next/navigation"

export default function ChildTodo () {
    const {slug} = useParams()
    return (<>
        child todo id = {slug}
    </>)
}