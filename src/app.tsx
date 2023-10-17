import { useEffect, useState } from "react"
import { MemeResponse } from "../types"

export default function App() {
    const [url, setUrl] = useState("")

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://meme-api.com/gimme")
            const data: MemeResponse = await response.json()
            setUrl(data.url)
        }
        getData()
    }, [])

    return (
        <>
            <h2 className="text-red-500 text-4xl">Hello from React!</h2>
            <img src={url} alt="meme" />
        </>
    )
}