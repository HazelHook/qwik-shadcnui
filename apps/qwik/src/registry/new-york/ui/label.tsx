import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import { tv } from "tailwind-variants"

const labelVariants = tv({
	base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
})

export type LabelProps = {} & QwikIntrinsicElements["label"]

const Label = component$<LabelProps>(({ class: classses, ...props }) => (
	<label class={labelVariants({ class: classses?.toString() })} {...props}>
		<Slot />
	</label>
))

export { Label }
