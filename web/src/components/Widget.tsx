
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetPanel } from './WidgetPanel/WidgetPanel'

export interface WidgetProps {

}

export function Widget(props: WidgetProps) {
    return (
        <Popover className='absolute bottom-5 right-5 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetPanel />
            </Popover.Panel>
            <Popover.Button className='bg-brand rounded-full p-3 h-12 flex items-center text-text-primary group hover:bg-brand-hover mt-1'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}