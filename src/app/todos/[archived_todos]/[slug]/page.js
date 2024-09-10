


"use client";  // This makes the component a Client Component
import { useParams } from "next/navigation"

export default function ArchivedTodos () {
    const {slug, archived_todos} = useParams()
    return (<>
        child todo {archived_todos} and id = {slug}
    </>)
}