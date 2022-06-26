import { ArrowLeft } from "phosphor-react"
import { WidgetHeader } from "../WidgetHeader"
import { useState } from "react"
import { ScreenshotButton } from "../Shared/ScreenshotButton"
import { feedbackInfo, FeedbackType } from "./StepTypeFeedback"

interface StepTextFeedbackProps {
    backToFeedbackType: () => void,
    sendFeedback: (
        type: string | undefined,
        comment: string | undefined,
        screenshot: string | undefined) => void,
    feedbackType: FeedbackType
}


export function StepTextFeedback(
    {
        backToFeedbackType: onBackToFeedbackType,
        sendFeedback: onSendFeedback, feedbackType
    }: StepTextFeedbackProps) {

    const [screenshot, setScreenshot] = useState<string | undefined>()
    const [feedbackText, setFeedbackText] = useState<string>()

    return (
        <>
            <WidgetHeader title={feedbackType && <img src={feedbackInfo[feedbackType].img} />} />
            <button
                className="absolute left-5 top-5"
                onClick={onBackToFeedbackType}
            >
                <ArrowLeft />
            </button>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSendFeedback(feedbackText, feedbackType.toString(), screenshot)
            }} className="flex flex-col gap-2 w-full mt-4">
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