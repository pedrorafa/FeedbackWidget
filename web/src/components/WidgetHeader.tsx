import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import { ReactNode } from "react";

export type WidgetHeaderProps = {
    title: ReactNode
}

export function WidgetHeader({ title }: WidgetHeaderProps) {
    return (
        <header>
            <span className="text-xl leading-6">{title}</span>
            <Popover.Button className="absolute top-5 right-5">
                <X />
            </Popover.Button>
        </header>
    )
}