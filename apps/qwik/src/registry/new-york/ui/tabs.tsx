import { cn } from "@/lib/utils"
import { Slot, component$ } from "@builder.io/qwik"
import { Tabs as TabsPrimitive } from "@hazix/primitives"
import type { TabPanelProps, TabProps, TabsProps } from "@hazix/primitives/lib-types/components/tabs"

const Tabs = TabsPrimitive.Root

const TabsList = component$<TabsProps>(({ class: classes, ...props }) => (
	<TabsPrimitive.List
		class={cn(
			"inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</TabsPrimitive.List>
))

const TabsTrigger = component$<TabProps>(({ class: classes, ...props }) => (
	<TabsPrimitive.Tab
		class={cn(
			"inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</TabsPrimitive.Tab>
))

const TabsContent = component$<TabPanelProps>(({ class: classes, ...props }) => (
	<TabsPrimitive.Panel
		class={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</TabsPrimitive.Panel>
))

export { Tabs, TabsList, TabsTrigger, TabsContent }
