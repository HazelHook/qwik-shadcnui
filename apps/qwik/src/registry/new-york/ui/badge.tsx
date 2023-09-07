import type { QwikIntrinsicElements } from "@builder.io/qwik"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const badgeVariants = tv({
	base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	variants: {
		variant: {
			default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
			secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
			destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
			outline: "text-foreground",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export type BadgeProps = {} & QwikIntrinsicElements["div"] & VariantProps<typeof badgeVariants>

function Badge({ class: classes, variant, ...props }: BadgeProps) {
	return <div class={badgeVariants({ variant, class: classes?.toString() })} {...props} />
}

export { Badge, badgeVariants }
