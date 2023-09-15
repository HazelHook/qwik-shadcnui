import { Icons } from "@/components/icons"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { getTableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/registry/new-york/ui/badge"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Resource, component$, useResource$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { TbChevronRight } from "@qwikest/icons/tablericons"
import { allDocs } from "contentlayer/generated"

const DocPage = component$(() => {
	const location = useLocation()

	const doc = allDocs.find((doc) => doc.slugAsParams === location.params.slug)

	if (!doc) {
		return <p>404.</p>
	}

	const toc = useResource$(async () => await getTableOfContents(doc.body.raw))

	return (
		<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
			<div class="mx-auto w-full min-w-0">
				<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
					<div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
					<TbChevronRight class="h-4 w-4" />
					<div class="font-medium text-foreground">{doc.title}</div>
				</div>
				<div class="space-y-2">
					<h1 class={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>{doc.title}</h1>
					{doc.description && (
						<p class="text-lg text-muted-foreground">
							{/* <Balancer>{doc.description}</Balancer> */}
							{doc.description}
						</p>
					)}
				</div>
				{doc.radix ? (
					<div class="flex items-center space-x-2 pt-4">
						{doc.radix?.link && (
							<a
								href={doc.radix.link}
								target="_blank"
								rel="noreferrer"
								class={cn(badgeVariants({ variant: "secondary" }))}
							>
								<Icons.radix class="mr-1 h-3 w-3" />
								Radix UI
							</a>
						)}
						{doc.radix?.api && (
							<a
								href={doc.radix.api}
								target="_blank"
								rel="noreferrer"
								class={cn(badgeVariants({ variant: "secondary" }))}
							>
								API Reference
							</a>
						)}
					</div>
				) : null}
				<div class="pb-12 pt-8">
					{/* <Mdx code={doc.body.code} /> */}
					<div
						// biome-ignore lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation>
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={doc.body.code}
					/>
				</div>
				<DocsPager doc={doc} />
			</div>
			{doc.toc && (
				<div class="hidden text-sm xl:block">
					<div class="sticky top-16 -mt-10 pt-4">
						<ScrollArea class="pb-10">
							<div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
								<Resource
									value={toc}
									onPending={() => <p>Loading...</p>}
									onResolved={(toc) => <DashboardTableOfContents toc={toc} />}
								/>
							</div>
						</ScrollArea>
					</div>
				</div>
			)}
		</main>
	)
})

export default DocPage
