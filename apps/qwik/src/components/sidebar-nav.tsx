import { cn } from "@/lib/utils"
import type { SidebarNavItem } from "@/types/nav"
import { component$ } from "@builder.io/qwik"
import { Link, useLocation } from "@builder.io/qwik-city"

export interface DocsSidebarNavProps {
	items: SidebarNavItem[]
}

export const DocsSidebarNav = component$<DocsSidebarNavProps>(({ items }) => {
	return items.length ? (
		<div class="w-full">
			{items.map((item, index) => (
				<div key={index} class={cn("pb-4")}>
					<h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
					{item.items.length && <DocsSidebarNavItems items={item.items} />}
				</div>
			))}
		</div>
	) : null
})

interface DocsSidebarNavItemsProps {
	items: SidebarNavItem[]
}

export const DocsSidebarNavItems = component$<DocsSidebarNavItemsProps>(({ items }) => {
	const location = useLocation()

	return items.length ? (
		<div class="grid grid-flow-row auto-rows-max text-sm">
			{items.map((item, index) =>
				item.href && !item.disabled ? (
					<Link
						key={index}
						href={item.href}
						class={cn(
							"group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
							item.disabled && "cursor-not-allowed opacity-60",
							normalizePath(location.url.pathname) === normalizePath(item.href)
								? "font-medium text-foreground"
								: "text-muted-foreground",
						)}
						target={item.external ? "_blank" : ""}
						rel={item.external ? "noreferrer" : ""}
					>
						{item.title}
						{item.label && (
							<span class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
								{item.label}
							</span>
						)}
					</Link>
				) : (
					<span
						key={index}
						class={cn(
							"flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
							item.disabled && "cursor-not-allowed opacity-60",
						)}
					>
						{item.title}
						{item.label && (
							<span class="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
								{item.label}
							</span>
						)}
					</span>
				),
			)}
		</div>
	) : (
		<></>
	)
})

function normalizePath(path: string) {
	return path.endsWith("/") ? path.slice(0, -1) : path
}
