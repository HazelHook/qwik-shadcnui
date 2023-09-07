import { component$ } from "@builder.io/qwik"

import { Progress as HazixProgress } from "@hazix/primitives"
import type { ProgressProps as HazixProgressProps } from "@hazix/primitives/lib-types/components/progress"
import { cn } from "@/lib/utils"

const Progress = component$<HazixProgressProps>(({ class: classes, value, ...props }) => (
	<HazixProgress.Root
		class={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", classes?.toString())}
		{...props}
	>
		<HazixProgress.Indicator
			class="h-full w-full flex-1 bg-primary transition-all"
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</HazixProgress.Root>
))

export { Progress }
