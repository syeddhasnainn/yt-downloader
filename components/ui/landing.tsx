'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Result from "./result"

export default function Landing() {

  const [videoData, setVideoData] = useState(null)
  const [url, seturl] = useState('https://www.youtube.com/watch?v=jwmpxuMn7p4')

  const handleSearch = async () => {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url })
    }).then(res => res.json())
    setVideoData(res)
  }

  const handleSubmit = (event: any) => {
    event?.preventDefault()
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Download YouTube Videos</h1>
        <p className="mt-4 text-muted-foreground">Easily download your favorite YouTube videos in high quality.</p>
        <form className="mt-6 flex items-center space-x-2" onSubmit={handleSubmit}>
          <Input
            value={url}
            onChange={(e) => seturl(e.target.value)}
            type="text"
            placeholder="Enter YouTube video URL"
            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button
            onClick={() => handleSearch()}
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Download
          </Button>
        </form>
      </div>
      {videoData &&
        <Result videoData={videoData}  />

      }
    </div>
  )
}