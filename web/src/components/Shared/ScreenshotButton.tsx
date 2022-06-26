import html2canvas from "html2canvas"
import { Camera, SpinnerGap, Trash } from "phosphor-react"
import { useState } from "react"

interface ScreenshotButtonProps {
    onPrintScreen: (base64: string | undefined) => void
}


export function ScreenshotButton({ onPrintScreen }: ScreenshotButtonProps) {

    const [loading, setLoading] = useState<boolean>(false)
    const [screenshot, setScreenshot] = useState<string | null>(null)

    const printScreen = async () => {
        setLoading(true)
        let canvas = await html2canvas(document.querySelector('html')!)
        let base64stream = canvas.toDataURL('image/png')

        onPrintScreen(base64stream)
        setScreenshot(base64stream)
        setLoading(false)
    }

    const cleanScreenshot = () => {
        onPrintScreen(undefined)
        setScreenshot(null)
    }

    return !loading && screenshot ?
        (<button type="button"
            className="p-2 h-10 w-10 flex items-end justify-end"
            onClick={cleanScreenshot}
            style={{
                backgroundImage: `url(${screenshot})`
            }}
        >
            <Trash className="w-3 h-3" />
        </button>)
        :
        (<button
            className="p-2 h-10 w-10 items-center justify-center"
            type="button"
            onClick={printScreen}>
            {!loading && !screenshot && <Camera />}
            {loading && <SpinnerGap weight="bold" className="transition-all animate-spin duration-900" />}
        </button>)
}