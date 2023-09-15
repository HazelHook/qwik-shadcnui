import { cn } from "@/lib/utils"
import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"

const ScrollArea = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("relative overflow-x-scroll", classes?.toString())} {...props}>
		<div class="h-full w-full rounded-[inherit]">
			<Slot />
		</div>
	</div>
))

export { ScrollArea }
