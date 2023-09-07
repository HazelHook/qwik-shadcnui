import { component$, useSignal } from "@builder.io/qwik"
import { format } from "date-fns"
import { CalendarIcon } from "../icons/pika/calendar"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export const DatePicker = component$(() => {
	const dateSignal = useSignal<Date>()

	return (
		<Popover>
			<PopoverTrigger>
				<Button
					variant={"outline"}
					class={cn("w-[280px] justify-start text-left font-normal", !dateSignal.value ? "text-muted-foreground" : "")}
				>
					<CalendarIcon class="mr-2 h-4 w-4" />
					{dateSignal.value ? format(dateSignal.value, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent class="w-auto p-0">
				<Calendar
					mode="single"
					selected={dateSignal.value}
					onSelect$={(date) => {
						dateSignal.value = date
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
})
