import { ArrowLeft } from "phosphor-react"
import { WidgetHeader } from "../WidgetHeader"
import { FormEvent, useState } from "react"
import { ScreenshotButton } from "../Shared/ScreenshotButton"
import { feedbackInfo, FeedbackType } from "./StepTypeFeedback"

interface StepTextFeedbackProps {
    backToFeedbackType: () => void
    feedbackType: FeedbackType
}


export function StepTextFeedback({ backToFeedbackType: onBackToFeedbackType, feedbackType }: StepTextFeedbackProps) {

    const [screenshot, setScreenshot] = useState<string | null>()
    const [feedbackText, setFeedbackText] = useState<string>()

    const sendFeedback = (e: FormEvent) => {
        e.preventDefault()

        console.log(feedbackText)
        console.log(screenshot)
    }

    return (
        <>
            <WidgetHeader title={feedbackType && <img src={feedbackInfo[feedbackType].img} />} />
            <button
                className="absolute left-5 top-5"
                onClick={onBackToFeedbackType}
            >
                <ArrowLeft />
            </button>
            <form onSubmit={sendFeedback} className="flex flex-col gap-2 w-full min-w-[300px] mt-4">
                <textarea
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="min-h-[112px] bg-surface-secondary scrollbar scrollbar-thin scrollbar-thumb-surface-primary scrollbar-thumb-surface-secondary-hover"
                    placeholder="Conte com detalhes o que aconteceu..."
                />
                <div className="flex items-start gap-2">
                    <ScreenshotButton onPrintScreen={setScreenshot} />
                    <button
                        className="btn-primary w-full h-10"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}