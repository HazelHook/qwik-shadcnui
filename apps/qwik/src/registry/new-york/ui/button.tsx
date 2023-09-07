import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import { TbRefresh } from "@qwikest/icons/tablericons"

const buttonVariants = tv({
	base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background gap-2",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			destructive_ghost: "text-red-400 hover:bg-accent",
			link: "underline-offset-4 hover:underline text-primary",
		},
		size: {
			default: "h-10 py-2 px-4",
			xs: "h-7 px-2 rounded-md",
			sm: "h-9 px-3 rounded-md",
			lg: "h-11 px-8 rounded-md",
			none: "",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
})

export type ButtonProps = {
	loading?: boolean
} & QwikIntrinsicElements["button"] &
	VariantProps<typeof buttonVariants>

const Button = component$<ButtonProps>(({ class: classes, variant, size, loading, ...props }) => {
	return (
		<button type="button" class={buttonVariants({ variant, size, className: classes?.toString() })} {...props}>
			{loading && <TbRefresh class="h-4 w-4 animate-spin" />}
			<Slot name="left-icon" />
			<Slot />
			<Slot name="right-icon" />
		</button>
	)
})

export { Button, buttonVariants }
