import { cn } from "@/lib/utils"
import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"

const Table = component$<QwikIntrinsicElements["table"]>(({ class: classes, ...props }) => (
	<div class="w-full overflow-auto">
		<table class={cn("w-full caption-bottom text-sm", classes?.toString())} {...props}>
			<Slot />
		</table>
	</div>
))

const TableHeader = component$<QwikIntrinsicElements["thead"]>(({ class: classes, ...props }) => (
	<thead class={cn("[&_tr]:border-b", classes?.toString())} {...props}>
		<Slot />
	</thead>
))

const TableBody = component$<QwikIntrinsicElements["tbody"]>(({ class: classes, ...props }) => (
	<tbody class={cn("[&_tr:last-child]:border-0", classes?.toString())} {...props}>
		<Slot />
	</tbody>
))

const TableFooter = component$<QwikIntrinsicElements["tfoot"]>(({ class: classes, ...props }) => (
	<tfoot class={cn("bg-primary font-medium text-primary-foreground", classes?.toString())} {...props}>
		<Slot />
	</tfoot>
))

const TableRow = component$<QwikIntrinsicElements["tr"]>(({ class: classes, ...props }) => (
	<tr
		class={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", classes?.toString())}
		{...props}
	>
		<Slot />
	</tr>
))

const TableHead = component$<QwikIntrinsicElements["th"]>(({ class: classes, ...props }) => (
	<th
		class={cn(
			"h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</th>
))

const TableCell = component$<QwikIntrinsicElements["td"]>(({ class: classes, ...props }) => (
	<td
		class={cn(
			"p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
			classes?.toString(),
		)}
		{...props}
	>
		<Slot />
	</td>
))

const TableCaption = component$<QwikIntrinsicElements["tfoot"]>(({ class: classes, ...props }) => (
	<caption class={cn("mt-4 text-sm text-muted-foreground", classes?.toString())} {...props}>
		<Slot />
	</caption>
))

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
