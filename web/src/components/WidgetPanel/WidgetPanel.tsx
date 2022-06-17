import { useState } from "react"
import { StepTextFeedback } from "./StepTextFeedback"
import { FeedbackType, StepTypeFeedback } from "./StepTypeFeedback"



export function WidgetPanel() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="w-min-300 bg-surface-primary relative p-4 rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType &&
                <StepTypeFeedback
                    setFeedbackType={setFeedbackType} />
            }
            {!!feedbackType &&
                <StepTextFeedback
                    feedbackType={feedbackType}
                    backToFeedbackType={() => setFeedbackType(null)}
                />
            }
            <footer className="text-sm text-text-secondary mt-4">
                NWL 2022
            </footer>
        </div>
    )
}