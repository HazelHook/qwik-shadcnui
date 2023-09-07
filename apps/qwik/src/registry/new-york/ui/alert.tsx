import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { cn } from "@/lib/utils"

const alertVariants = tv({
	base: "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
	variants: {
		variant: {
			default: "bg-background text-foreground",
			destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

export type AlertProps = {} & VariantProps<typeof alertVariants> & QwikIntrinsicElements["div"]

const Alert = component$<AlertProps>(({ class: classes, variant, ...props }) => (
	<div role="alert" class={alertVariants({ variant, class: classes?.toString() })} {...props}>
		<Slot />
	</div>
))

const AlertTitle = component$<QwikIntrinsicElements["h5"]>(({ class: classes, ...props }) => (
	<h5 class={cn("mb-1 font-medium leading-none tracking-tight", classes?.toString())} {...props}>
		<Slot />
	</h5>
))

const AlertDescription = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("text-sm [&_p]:leading-relaxed", classes?.toString())} {...props}>
		<Slot />
	</div>
))

export { Alert, AlertTitle, AlertDescription }
