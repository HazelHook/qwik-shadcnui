import { cn } from "@/lib/utils"
import { Slot, component$ } from "@builder.io/qwik"
import { RadioGroup as RadioGroupPrimitive } from "@hazix/primitives"
import type { RadioGroupItemProps, RadioGroupProps } from "@hazix/primitives/lib-types/components/radio-group"
import { CheckTickIcon } from "../icons/pika/checkTick"

const RadioGroup = component$<RadioGroupProps>(({ class: classes, ...props }) => {
	return (
		<RadioGroupPrimitive.Root class={cn("grid gap-2", classes?.toString())} {...props}>
			<Slot />
		</RadioGroupPrimitive.Root>
	)
})

const RadioGroupItem = component$<RadioGroupItemProps>(({ class: classes, ...props }) => {
	return (
		<RadioGroupPrimitive.Item
			class={cn(
				"aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				classes?.toString(),
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator class="flex items-center justify-center">
				<CheckTickIcon class="h-3.5 w-3.5 text-primary" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
})

export { RadioGroup, RadioGroupItem }
