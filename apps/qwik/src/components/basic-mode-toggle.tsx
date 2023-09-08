import { Button } from "@/registry/new-york/ui/button"

import { component$ } from "@builder.io/qwik"
import { useTheme } from "qwik-themes"

export const BasicModeToggle = component$(() => {
	const { setTheme, theme } = useTheme()
	console.log(theme)
	return (
		<>
			<Button onClick$={() => setTheme("light")}>Light</Button>
			<Button onClick$={() => setTheme("dark")}>Dark</Button>
			<Button onClick$={() => setTheme("system")}>System</Button>
		</>
	)
})
