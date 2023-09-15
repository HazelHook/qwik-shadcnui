import { cn } from "@/lib/utils"
import type { QwikIntrinsicElements } from "@builder.io/qwik"
import { Slot, component$ } from "@builder.io/qwik"
import { Dialog as DialogPrimitive } from "@hazix/primitives"
import type { DialogOverlayProps } from "@hazix/primitives/lib-types/components/dialog"
import { TbCross } from "@qwikest/icons/tablericons"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogClose = DialogPrimitive.Close

const DialogOverlay = component$<DialogOverlayProps>(({ class: classes, ...props }) => (
	<DialogPrimitive.Overlay
		class={cn(
			"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			classes?.toString(),
		)}
		{...props}
	/>
))

const DialogContent = component$(({ class: classes, ...props }: QwikIntrinsicElements["div"]) => (
	<DialogPrimitive.Portal>
		<DialogOverlay />
		<DialogPrimitive.Content
			class={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
				classes?.toString(),
			)}
			{...props}
		>
			<Slot />
			<DialogPrimitive.Close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
				<TbCross class="h-4 w-4" />
				<span class="sr-only">Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
))

const DialogHeader = component$(({ class: classes, ...props }: QwikIntrinsicElements["div"]) => (
	<div class={cn("flex flex-col space-y-1.5 text-center sm:text-left", classes?.toString())} {...props}>
		<Slot />
	</div>
))

const DialogFooter = component$(({ class: classes, ...props }: QwikIntrinsicElements["div"]) => (
	<div class={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", classes?.toString())} {...props}>
		<Slot />
	</div>
))

const DialogTitle = component$(({ class: classes, ...props }: QwikIntrinsicElements["h2"]) => (
	<h2 class={cn("text-lg font-semibold leading-none tracking-tight", classes?.toString())} {...props}>
		<Slot />
	</h2>
))

const DialogDescription = component$(({ class: classes, ...props }: QwikIntrinsicElements["h2"]) => (
	<p class={cn("text-sm text-muted-foreground", classes?.toString())} {...props}>
		<Slot />
	</p>
))

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription }
