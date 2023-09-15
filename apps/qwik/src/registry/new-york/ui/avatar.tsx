import { cn } from "@/lib/utils"
import { Slot, component$ } from "@builder.io/qwik"
import { Avatar as HazixAvatar } from "@hazix/primitives"
import type { AvatarFallbackProps, AvatarImageProps, AvatarProps } from "@hazix/primitives/lib-types/components/avatar"

const Avatar = component$<AvatarProps>(({ class: classes, ...props }) => (
	<HazixAvatar.Root
		class={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", classes?.toString())}
		{...props}
	>
		<Slot />
	</HazixAvatar.Root>
))

const AvatarImage = component$<AvatarImageProps>(({ class: classes, ...props }) => (
	<HazixAvatar.Image class={cn("aspect-square h-full w-full", classes?.toString())} {...props} />
))

const AvatarFallback = component$<AvatarFallbackProps>(({ class: classes, ...props }) => (
	<HazixAvatar.Fallback
		class={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", classes?.toString())}
		{...props}
	>
		<Slot />
	</HazixAvatar.Fallback>
))

export { Avatar, AvatarImage, AvatarFallback }
