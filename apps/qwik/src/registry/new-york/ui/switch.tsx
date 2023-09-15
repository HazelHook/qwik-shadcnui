import { cn } from "@/lib/utils"
import { component$ } from "@builder.io/qwik"
import { Switch as SwitchPrimitives } from "@hazix/primitives"
import type { SwitchProps } from "@hazix/primitives/lib-types/components/switch"

const Switch = component$<SwitchProps>(({ class: classes, ...props }) => (
	<SwitchPrimitives.Root
		class={cn(
			"peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
			classes?.toString(),
		)}
		{...props}
	>
		<SwitchPrimitives.Thumb
			class={cn(
				"pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
			)}
		/>
	</SwitchPrimitives.Root>
))

export { Switch }
