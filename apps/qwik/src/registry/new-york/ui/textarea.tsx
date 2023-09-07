import * as React from "react"
import { cn } from "@/lib/utils"
import { component$, type QwikIntrinsicElements } from "@builder.io/qwik"

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
