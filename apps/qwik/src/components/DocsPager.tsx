import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { DocsPagerProps, getPagerForDoc } from "./pager"

export function DocsPager({ doc }: DocsPagerProps) {
	const pager = getPagerForDoc(doc)

	if (!pager) {
		return null
	}

	return (
		<div className="flex flex-row items-center justify-between">
			{pager?.prev?.href && (
				<Link href={pager.prev.href} className={buttonVariants({ variant: "outline" })}>
					<ChevronLeftIcon className="mr-2 h-4 w-4" />
					{pager.prev.title}
				</Link>
			)}
			{pager?.next?.href && (
				<Link href={pager.next.href} className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}>
					{pager.next.title}
					<ChevronRightIcon className="ml-2 h-4 w-4" />
				</Link>
			)}
		</div>
	)
}
