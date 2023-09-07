import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import { cn } from "@/lib/utils"

const Card = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("rounded-xl border bg-card text-card-foreground shadow", classes?.toString())} {...props}>
		<Slot />
	</div>
))

const CardHeader = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("flex flex-col space-y-1.5 p-6", classes?.toString())} {...props}>
		<Slot />
	</div>
))

const CardTitle = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<h3 class={cn("font-semibold leading-none tracking-tight", classes?.toString())} {...props}>
		<Slot />
	</h3>
))

const CardDescription = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<p class={cn("text-sm text-muted-foreground", classes?.toString())} {...props}>
		<Slot />
	</p>
))

const CardContent = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("p-6 pt-0", classes?.toString())} {...props}>
		<Slot />
	</div>
))

const CardFooter = component$<QwikIntrinsicElements["div"]>(({ class: classes, ...props }) => (
	<div class={cn("flex items-center p-6 pt-0", classes?.toString())} {...props}>
		<Slot />
	</div>
))

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
