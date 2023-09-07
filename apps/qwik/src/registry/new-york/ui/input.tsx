import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export type InputProps = {} & Omit<QwikIntrinsicElements["input"], "children">

const Input = component$<InputProps>(({ class: classes, type, ...props }) => {
	return (
		<input
			type={type}
			class={twMerge(
				"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				classes?.toString(),
			)}
			{...props}
		/>
	)
})

export { Input }
