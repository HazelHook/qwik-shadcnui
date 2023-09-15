import { cn } from "@/lib/utils"
import { Slot, component$ } from "@builder.io/qwik"
import { Popover as PopoverPrimitive } from "@hazix/primitives"
import type { PopoverContentProps } from "@hazix/primitives/lib-types/components/popover/popover-content"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = component$<PopoverContentProps>(({ class: classes, ...props }) => (
	<PopoverPrimitive.Content
		class={cn(
			"z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</PopoverPrimitive.Content>
))

export { Popover, PopoverTrigger, PopoverContent }
