import type { Doc } from "contentlayer/generated"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { NavItem, NavItemWithChildren } from "@/types/nav"
import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { TbChevronLeft, TbChevronRight } from "@qwikest/icons/tablericons"

interface DocsPagerProps {
	doc: Doc
}

export const DocsPager = component$(({ doc }: DocsPagerProps) => {
	const pager = getPagerForDoc(doc)

	if (!pager) {
		return null
	}

	return (
		<div class="flex flex-row items-center justify-between">
			{pager?.prev?.href && (
				<Link href={pager.prev.href} class={buttonVariants({ variant: "outline" })}>
					<TbChevronLeft class="mr-2 h-4 w-4" />
					{pager.prev.title}
				</Link>
			)}
			{pager?.next?.href && (
				<Link href={pager.next.href} class={cn(buttonVariants({ variant: "outline" }), "ml-auto")}>
					{pager.next.title}
					<TbChevronRight class="ml-2 h-4 w-4" />
				</Link>
			)}
		</div>
	)
})

export function getPagerForDoc(doc: Doc) {
	const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
	const activeIndex = flattenedLinks.findIndex((link) => doc.slug === link?.href)
	const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
	const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null
	return {
		prev,
		next,
	}
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
	return links
		.reduce<NavItem[]>((flat, link) => {
			return flat.concat(link.items?.length ? flatten(link.items) : link)
		}, [])
		.filter((link) => !link?.disabled)
}
