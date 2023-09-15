import { cn } from "@/lib/utils"
import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"

const Skeleton = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => {
	return (
		<div class={cn("animate-pulse rounded-md bg-primary/10", classes?.toString())} {...props}>
			<Slot />
		</div>
	)
})

export { Skeleton }
