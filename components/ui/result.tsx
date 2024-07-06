
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { useState } from "react"

export default function Result({ videoData }: {videoData:any}) {

  const formatInfo = videoData.formats.filter((format:any) => format.container === 'mp4')
  const iframeURL = videoData['player_response']['microformat']['playerMicroformatRenderer']['embed']['iframeUrl']

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-12">
      <div className="aspect-video w-full max-w-4xl rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={iframeURL}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {videoData && <div className="w-full max-w-4xl mt-8">
        <Table>
          <TableHeader>

            <TableRow>
              <TableHead>Format</TableHead>
              <TableHead>Quality</TableHead>
              <TableHead>Bitrate</TableHead>
              <TableHead>Codecs</TableHead>
              <TableHead>Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formatInfo.map((format: any) =>

            (

              <TableRow>
                <TableCell>{format.container}</TableCell>
                <TableCell>{format.qualityLabel}</TableCell>
                <TableCell>{format.bitrate}</TableCell>
                <TableCell>test</TableCell>
                <TableCell>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={format.url}
                    className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    Download
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>}

    </div>
  )
}