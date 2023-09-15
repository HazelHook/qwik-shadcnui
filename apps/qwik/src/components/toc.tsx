import type { TableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { component$, useComputed$, useSignal, useVisibleTask$ } from "@builder.io/qwik"

interface TocProps {
	toc: TableOfContents
}

export const DashboardTableOfContents = component$(({ toc }: TocProps) => {
	const itemIdsSig = useComputed$(() =>
		toc.items
			? toc.items
					.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
					.flat()
					.filter(Boolean)
					.map((id) => id?.split("#")[1])
			: [],
	)
	const activeHeading = useActiveItem(itemIdsSig.value as string[])

	if (!toc?.items) {
		return null
	}

	return (
		<div class="space-y-2">
			<p class="font-medium">On This Page</p>
			<Tree tree={toc} activeItem={activeHeading.value} />
		</div>
	)
})

function useActiveItem(itemIds: string[]) {
	const activeIdSig = useSignal<string>()

	useVisibleTask$(({ cleanup, track }) => {
		track(() => itemIds)
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeIdSig.value = entry.target.id
					}
				})
			},
			{ rootMargin: "0% 0% -80% 0%" },
		)

		itemIds?.forEach((id) => {
			const element = document.getElementById(id)
			if (element) {
				observer.observe(element)
			}
		})

		cleanup(() => {
			itemIds?.forEach((id) => {
				const element = document.getElementById(id)
				if (element) {
					observer.unobserve(element)
				}
			})
		})
	})

	return activeIdSig
}

interface TreeProps {
	tree: TableOfContents
	level?: number
	activeItem?: string
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	return tree?.items?.length && level < 3 ? (
		<ul class={cn("m-0 list-none", { "pl-4": level !== 1 })}>
			{tree.items.map((item, index) => {
				return (
					<li key={index} class={cn("mt-0 pt-2")}>
						<a
							href={item.url}
							class={cn(
								"inline-block no-underline transition-colors hover:text-foreground",
								item.url === `#${activeItem}` ? "font-medium text-foreground" : "text-muted-foreground",
							)}
						>
							{item.title}
						</a>
						{item.items?.length ? <Tree tree={item} level={level + 1} activeItem={activeItem} /> : null}
					</li>
				)
			})}
		</ul>
	) : null
}
