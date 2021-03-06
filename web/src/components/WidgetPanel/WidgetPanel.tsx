import { FormEvent, useState } from "react"
import { StepTextFeedback } from "./StepTextFeedback"
import { FeedbackType, StepTypeFeedback } from "./StepTypeFeedback"
import api from "../../lib/api"
import { StepSuccessFeedback } from "./StepSuccessFeedback"

export function WidgetPanel() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSended, setFeedbackSended] = useState<boolean>(true)

    const sendFeedback = (
        type: string | undefined,
        comment: string | undefined,
        screenshot: string | undefined
    ) => {
        api.post('feedbacks', {
            type,
            comment,
            screenshot
        })
            .then(res => {
                setFeedbackSended(true)
            })
            .catch(err => {
                alert("Error on send feedback")
                setFeedbackSended(false)
                console.error(err)
            })
    }
    return (
        <div className="flex flex-col items-center bg-surface-primary relative p-4 rounded-2xl shadow-lg w-[calc(100vw-2rem)] md:w-auto min-h-[264px]">
            <div className="flex flex-col items-center min-w-[320px]">
                {!feedbackSended && !feedbackType &&
                    <StepTypeFeedback
                        setFeedbackType={setFeedbackType} />
                }
                {!feedbackSended && !!feedbackType &&
                    <StepTextFeedback
                        feedbackType={feedbackType}
                        sendFeedback={sendFeedback}
                        backToFeedbackType={() => setFeedbackType(null)}
                    />
                }
                {feedbackSended &&
                    <StepSuccessFeedback
                        backToFeedbackType={() => {
                            setFeedbackSended(false)
                            setFeedbackType(null)
                        }}
                    />
                }
                <footer className="text-sm text-text-secondary absolute bottom-2">
                    NWL 2022
                </footer>
            </div>
        </div>
    )
}