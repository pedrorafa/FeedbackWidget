import { FormEvent, useState } from "react"
import { StepTextFeedback } from "./StepTextFeedback"
import { FeedbackType, StepTypeFeedback } from "./StepTypeFeedback"
import api from "../../lib/api"
import { StepSuccessFeedback } from "./StepSuccessFeedback"

export function WidgetPanel() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSended, setFeedbackSended] = useState<boolean>(false)

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
        <div className="bg-surface-primary relative p-4 rounded-2xl flex flex-col items-center shadow-lg min-w-[320px] w-[calc(100vw-2rem)] md:w-auto">

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
            <footer className="text-sm text-text-secondary mt-4">
                NWL 2022
            </footer>
        </div>
    )
}