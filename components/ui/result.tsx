/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ssiDGAL2JJA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"

export default function Result() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="aspect-video w-full max-w-4xl rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="w-full max-w-4xl mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Format</TableHead>
              <TableHead>Quality</TableHead>
              <TableHead>Bitrate</TableHead>
              <TableHead>Container</TableHead>
              <TableHead>Codecs</TableHead>
              <TableHead>Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>MP4</TableCell>
              <TableCell>1080p</TableCell>
              <TableCell>5Mbps</TableCell>
              <TableCell>MP4</TableCell>
              <TableCell>H.264, AAC</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Download
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>WebM</TableCell>
              <TableCell>720p</TableCell>
              <TableCell>3Mbps</TableCell>
              <TableCell>WebM</TableCell>
              <TableCell>VP9, Opus</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Download
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>MKV</TableCell>
              <TableCell>480p</TableCell>
              <TableCell>1.5Mbps</TableCell>
              <TableCell>MKV</TableCell>
              <TableCell>H.264, AAC</TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Download
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}