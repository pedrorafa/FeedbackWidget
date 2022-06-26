

import { WidgetHeader } from '../WidgetHeader';
import bugImg from './../../assets/bug.png'
import ideaImg from './../../assets/idea.png'
import otherImg from './../../assets/thought.png'

export const feedbackInfo = {
    Bug: {
        img: bugImg,
        title: "Bug"
    },
    Idea: {
        img: ideaImg,
        title: "Idea"
    },
    Other: {
        img: otherImg,
        title: "Other"
    },
}
export type FeedbackType = keyof typeof feedbackInfo;

interface StepTypeFeedbackProps {
    setFeedbackType: (type: FeedbackType | null) => void
}

export function StepTypeFeedback({ setFeedbackType }: StepTypeFeedbackProps) {
    return (
        <>
            <WidgetHeader title='Deixe seu Feedback' />
            <div className="flex items-center gap-2 py-5">
                {Object.entries(feedbackInfo).map(([k, value]) => {
                    return (
                        <button key={k}
                            className="flex flex-col items-center gap-2 py-5 w-24 min-h-full"
                            onClick={() => setFeedbackType(k as FeedbackType)}
                        >
                            <img src={value.img}></img>
                            {value.title}
                        </button>
                    )
                })}
            </div>
        </>

    )
}