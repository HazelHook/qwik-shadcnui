import { cn } from "@/lib/utils"
import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik"
import * as React from "react"

export type TextareaProps = {} & Omit<QwikIntrinsicElements["textarea"], "children">

const Textarea = component$<TextareaProps>(({ class: classes, ...props }) => {
	return (
		<textarea
			class={cn(
				"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				classes?.toString(),
			)}
			{...props}
		/>
	)
})

export { Textarea }
