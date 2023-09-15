import { cn } from "@/lib/utils"
import { component$ } from "@builder.io/qwik"
import { Separator as SeparatorPrimitive } from "@hazix/primitives"
import type { SeparatorProps } from "@hazix/primitives/lib-types/components/separator/separator"

const Separator = component$<SeparatorProps>(
	({ class: classes, orientation = "horizontal", decorative = true, ...props }) => (
		<SeparatorPrimitive.default
			decorative={decorative}
			orientation={orientation}
			class={cn(
				"shrink-0 bg-border",
				orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
				classes?.toString(),
			)}
			{...props}
		/>
	),
)

export { Separator }
