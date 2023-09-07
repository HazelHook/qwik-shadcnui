import { component$ } from "@builder.io/qwik"
import { Checkbox as HazixCheckbox } from "@hazix/primitives"
import type { CheckboxProps } from "@hazix/primitives/lib-types/components/checkbox"
import { CheckTickIcon } from "../icons/pika/checkTick"
import { cn } from "@/lib/utils"

const Checkbox = component$<CheckboxProps>(({ class: classes, ...props }) => (
	<HazixCheckbox.Root
		class={cn(
			"peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
			classes?.toString(),
		)}
		{...props}
	>
		<HazixCheckbox.Indicator class={"flex items-center justify-center text-current"}>
			<CheckTickIcon class="h-4 w-4" />
		</HazixCheckbox.Indicator>
	</HazixCheckbox.Root>
))

export { Checkbox }
