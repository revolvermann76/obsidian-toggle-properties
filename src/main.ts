import { Editor, MarkdownView, Plugin } from "obsidian";

export default class ObsidianNunjaPlugin extends Plugin {
	async onload() {
		// This adds the "Insert snippet" editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: "toggle-properties",
			name: "Toggle properties",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const metadataCnt = document.querySelector(
					".workspace-leaf.mod-active .metadata-container"
				) as HTMLElement;
				if (metadataCnt) {
					metadataCnt.style.display =
						metadataCnt.style.display === "block"
							? "none"
							: "block";
				}
			},
			hotkeys: [
				{
					key: "P",
					modifiers: ["Ctrl", "Shift"],
				},
			],
		});

	}
}

