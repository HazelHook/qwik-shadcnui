import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const TypographyVariants = tv({
	base: "",
	variants: {
		variant: {
			h1: "font-heading scroll-m-20 text-4xl font-semibold tracking-tight",
			h2: "font-heading scroll-m-20 pb-2 text-3xl font-medium tracking-tight transition-colors first:mt-0",
			h3: "font-heading scroll-m-20 text-2xl font-medium tracking-tight",
			h4: "font-heading scroll-m-20 text-xl font-medium tracking-tight",
			h5: "font-heading scroll-m-20 text-lg font-medium",
			h6: "font-heading scroll-m-20 text-base font-medium",
		},
	},
	defaultVariants: {
		variant: "h1",
	},
})

export type TypographyProps = {
	variant?: VariantProps<typeof TypographyVariants>["variant"]
	className?: string
} & QwikIntrinsicElements["h1"]

export const Typography = component$<TypographyProps>(({ variant, class: classes, ...props }) => {
	const Type: any = variant

	return (
		<Type class={TypographyVariants({ variant, class: classes?.toString() })} {...props}>
			<Slot />
		</Type>
	)
})
