declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"api-core-cli-1": {
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "api-core-cli-1",
  data: any
},
},
"api-core-config-1": {
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "api-core-config-1",
  data: any
},
},
"api-core-js-1": {
"README.md": {
  id: "README.md",
  slug: "README",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"app.md": {
  id: "app.md",
  slug: "app",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"cli.md": {
  id: "cli.md",
  slug: "cli",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"clipboard.md": {
  id: "clipboard.md",
  slug: "clipboard",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"dialog.md": {
  id: "dialog.md",
  slug: "dialog",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"event.md": {
  id: "event.md",
  slug: "event",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"fs.md": {
  id: "fs.md",
  slug: "fs",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"globalShortcut.md": {
  id: "globalShortcut.md",
  slug: "globalShortcut",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"http.md": {
  id: "http.md",
  slug: "http",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"mocks.md": {
  id: "mocks.md",
  slug: "mocks",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"notification.md": {
  id: "notification.md",
  slug: "notification",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"os.md": {
  id: "os.md",
  slug: "os",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"path.md": {
  id: "path.md",
  slug: "path",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"process.md": {
  id: "process.md",
  slug: "process",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"shell.md": {
  id: "shell.md",
  slug: "shell",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"tauri.md": {
  id: "tauri.md",
  slug: "tauri",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"updater.md": {
  id: "updater.md",
  slug: "updater",
  body: string,
  collection: "api-core-js-1",
  data: any
},
"window.md": {
  id: "window.md",
  slug: "window",
  body: string,
  collection: "api-core-js-1",
  data: any
},
},
"blog": {
"tauri-1-0.md": {
  id: "tauri-1-0.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-1-1.md": {
  id: "tauri-1-1.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-1-2.md": {
  id: "tauri-1-2.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-egui-0-1.md": {
  id: "tauri-egui-0-1.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-mobile-alpha.md": {
  id: "tauri-mobile-alpha.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-programme-turns-1-and-board-elections.md": {
  id: "tauri-programme-turns-1-and-board-elections.md",
  slug: string,
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"docs-core-1": {
"building/README.md": {
  id: "building/README.md",
  slug: "building/README",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/_tauri-build.md": {
  id: "building/_tauri-build.md",
  slug: "building/_tauri-build",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/app-size.md": {
  id: "building/app-size.md",
  slug: "building/app-size",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/cross-platform.md": {
  id: "building/cross-platform.md",
  slug: "building/cross-platform",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/linux.md": {
  id: "building/linux.md",
  slug: "building/linux",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/macos.md": {
  id: "building/macos.md",
  slug: "building/macos",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/resources.md": {
  id: "building/resources.md",
  slug: "building/resources",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/sidecar.md": {
  id: "building/sidecar.md",
  slug: "building/sidecar",
  body: string,
  collection: "docs-core-1",
  data: any
},
"building/windows.md": {
  id: "building/windows.md",
  slug: "building/windows",
  body: string,
  collection: "docs-core-1",
  data: any
},
"debugging/application.md": {
  id: "debugging/application.md",
  slug: "debugging/application",
  body: string,
  collection: "docs-core-1",
  data: any
},
"debugging/vs-code.md": {
  id: "debugging/vs-code.md",
  slug: "debugging/vs-code",
  body: string,
  collection: "docs-core-1",
  data: any
},
"development/development-cycle.md": {
  id: "development/development-cycle.md",
  slug: "development/development-cycle",
  body: string,
  collection: "docs-core-1",
  data: any
},
"development/updating-dependencies.md": {
  id: "development/updating-dependencies.md",
  slug: "development/updating-dependencies",
  body: string,
  collection: "docs-core-1",
  data: any
},
"distribution/publishing.md": {
  id: "distribution/publishing.md",
  slug: "distribution/publishing",
  body: string,
  collection: "docs-core-1",
  data: any
},
"distribution/sign-linux.md": {
  id: "distribution/sign-linux.md",
  slug: "distribution/sign-linux",
  body: string,
  collection: "docs-core-1",
  data: any
},
"distribution/sign-macos.md": {
  id: "distribution/sign-macos.md",
  slug: "distribution/sign-macos",
  body: string,
  collection: "docs-core-1",
  data: any
},
"distribution/sign-windows.md": {
  id: "distribution/sign-windows.md",
  slug: "distribution/sign-windows",
  body: string,
  collection: "docs-core-1",
  data: any
},
"distribution/updater.md": {
  id: "distribution/updater.md",
  slug: "distribution/updater",
  body: string,
  collection: "docs-core-1",
  data: any
},
"faq.md": {
  id: "faq.md",
  slug: "faq",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/README.md": {
  id: "features/README.md",
  slug: "features/README",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/cli.md": {
  id: "features/cli.md",
  slug: "features/cli",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/command.md": {
  id: "features/command.md",
  slug: "features/command",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/events.md": {
  id: "features/events.md",
  slug: "features/events",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/icons.md": {
  id: "features/icons.md",
  slug: "features/icons",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/menu.md": {
  id: "features/menu.md",
  slug: "features/menu",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/multiwindow.md": {
  id: "features/multiwindow.md",
  slug: "features/multiwindow",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/plugin.md": {
  id: "features/plugin.md",
  slug: "features/plugin",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/splashscreen.md": {
  id: "features/splashscreen.md",
  slug: "features/splashscreen",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/system-tray.md": {
  id: "features/system-tray.md",
  slug: "features/system-tray",
  body: string,
  collection: "docs-core-1",
  data: any
},
"features/window-customization.md": {
  id: "features/window-customization.md",
  slug: "features/window-customization",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/mocking.md": {
  id: "testing/mocking.md",
  slug: "testing/mocking",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/webdriver/ci.md": {
  id: "testing/webdriver/ci.md",
  slug: "testing/webdriver/ci",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/webdriver/example/selenium.md": {
  id: "testing/webdriver/example/selenium.md",
  slug: "testing/webdriver/example/selenium",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/webdriver/example/setup.md": {
  id: "testing/webdriver/example/setup.md",
  slug: "testing/webdriver/example/setup",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/webdriver/example/webdriverio.md": {
  id: "testing/webdriver/example/webdriverio.md",
  slug: "testing/webdriver/example/webdriverio",
  body: string,
  collection: "docs-core-1",
  data: any
},
"testing/webdriver/introduction.md": {
  id: "testing/webdriver/introduction.md",
  slug: "testing/webdriver/introduction",
  body: string,
  collection: "docs-core-1",
  data: any
},
},

	};

	type ContentConfig = typeof import("./config");
}
