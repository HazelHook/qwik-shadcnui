import { Icons } from "@/components/icons"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/new-york/ui/sheet"
import type { PropFunction, QwikIntrinsicElements } from "@builder.io/qwik"
import { component$, useSignal } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import { TbMenu } from "@qwikest/icons/tablericons"

export const MobileNav = component$(() => {
	const openSig = useSignal(false)

	return (
		<Sheet open={openSig}>
			<SheetTrigger
				as={Button}
				variant="ghost"
				class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
			>
				<TbMenu class="h-5 w-5" />
				<span class="sr-only">Toggle Menu</span>
			</SheetTrigger>
			<SheetContent side="left" class="pr-0">
				<MobileLink
					href="/"
					class="flex items-center"
					onOpenChange$={(open) => {
						openSig.value = open
					}}
				>
					<Icons.logo class="mr-2 h-4 w-4" />
					<span class="font-bold">{siteConfig.name}</span>
				</MobileLink>
				<ScrollArea class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					<div class="flex flex-col space-y-3">
						{docsConfig.mainNav.map(
							(item) =>
								item.href && (
									<MobileLink
										key={item.href}
										href={item.href}
										onOpenChange$={(open) => {
											openSig.value = open
										}}
									>
										{item.title}
									</MobileLink>
								),
						)}
					</div>
					<div class="flex flex-col space-y-2">
						{docsConfig.sidebarNav.map((item, index) => (
							<div key={index} class="flex flex-col space-y-3 pt-6">
								<h4 class="font-medium">{item.title}</h4>
								{item?.items?.length &&
									item.items.map((item) => (
										<>
											{!item.disabled &&
												(item.href ? (
													<MobileLink
														href={item.href}
														onOpenChange$={(open) => {
															openSig.value = open
														}}
														class="text-muted-foreground"
													>
														{item.title}
													</MobileLink>
												) : (
													item.title
												))}
										</>
									))}
							</div>
						))}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
})

type MobileLinkProps = {
	onOpenChange$?: PropFunction<(open: boolean) => void>
	class?: string
} & QwikIntrinsicElements["a"]

const MobileLink = component$<MobileLinkProps>(({ href, onOpenChange$, class: classes, children, ...props }) => {
	const nav = useNavigate()
	return (
		<a
			href={href}
			onClick$={() => {
				nav(href?.toString())
				onOpenChange$?.(false)
			}}
			class={cn(classes)}
			{...props}
		>
			{children}
		</a>
	)
})
