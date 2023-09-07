import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

import { Slot, component$ } from "@builder.io/qwik"
import { Toggle as TogglePrimitive } from "@hazix/primitives"
import type { ToggleProps } from "@hazix/primitives/lib-types/components/toggle"

const toggleVariants = tv({
	base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
		},
		size: {
			default: "h-9 px-3",
			sm: "h-8 px-2",
			lg: "h-10 px-3",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
})

const Toggle = component$<ToggleProps & VariantProps<typeof toggleVariants>>(
	({ class: classes, variant, size, ...props }) => (
		<TogglePrimitive.Toggle class={toggleVariants({ variant, size, class: classes?.toString() })} {...props}>
			<Slot />
		</TogglePrimitive.Toggle>
	),
)

export { Toggle, toggleVariants }
