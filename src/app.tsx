import { useEffect, useState } from "react"

export default function App() {
    const [url, setUrl] = useState("")

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://meme-api.com/gimme")
            const data = await response.json()
            setUrl(data.url)
        }
        getData()
    }, [])

    return (
        <>
            <h2 className="text-red-500">Hello from React!</h2>
            <img src={url} alt="meme" />
        </>
    )
}