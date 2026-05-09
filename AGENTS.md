# AI Agent Instructions: Blog Post Writing Style

When assisting with writing or editing blog posts for this repository, please adhere strictly to the following writing style and formatting guidelines. This ensures consistency across all technical tutorials and guides.

## 1. Tone and Perspective
- **Pragmatic and Educational:** Adopt the tone of a knowledgeable peer developer guiding another developer. The focus should be on clarity, reproducibility, and reader success.
- **First-Person/Second-Person Mix:** Use "I" when describing personal experiences, decisions made, or actions taken (e.g., "I started by migrating...", "In my case, I use Windows"). Use "you" when instructing the reader (e.g., "You can get my public key here", "If you followed the steps correctly").
- **Direct and Concise:** Avoid fluff, long preambles, and overly complex vocabulary. Introduce the problem or goal immediately and dive straight into the solution. Use short paragraphs and sentences.

## 2. Structure and Flow
- **Clear Introductions:** Start by defining exactly what the post will accomplish. If applicable, explicitly state what the post is *not* about to set expectations early.
- **Sequential Steps:** Break down complex, technical processes into logical, easy-to-follow steps. Heavily utilize numbered lists (1, 2, 3...) and sequential headings (H2, H3) to guide the reader from start to finish.
- **Brief Wrap-ups:** Conclude posts with a short, polite sign-off (e.g., "That’s a wrap for this post. I hope you found it useful.").

## 3. Markdown and Formatting
Make extensive use of Markdown to make the text highly scannable and practical:
- **Code Blocks:** Use fenced code blocks (with language specified, like `bash`, `yaml`, `jsx`) for all terminal commands, configuration files, and code snippets.
- **Inline Code:** Use backticks consistently for file names (e.g., `index.hbs`), short terminal commands, variables, and paths.
- **Keystrokes:** Use `<kbd>` HTML tags for keyboard shortcuts (e.g., `<kbd>Shift</kbd>+<kbd>Right Click</kbd>`).
- **Emphasis:** Use **bold text** strategically to highlight important concepts, specific tool names, or crucial UI elements. Do not over-bold.

## 4. Visual Aids and Components
- **Screenshots/Images:** Reference or insert images to show the user exactly what they should see at specific steps, particularly for terminal outputs or UI steps. Use the standard markdown format `![alt text](/assets/post-name/image.png)`.
- **Custom React Components:** Utilize the repository's custom MDX components where appropriate:
  - `<NoteBlock title="Optional Title">...</NoteBlock>`: Use this to draw attention to important caveats, security warnings, alternative methods, or promotional text. Note that you need to import it: `import NoteBlock from "../components/note-block.jsx";`
  - `<InArticleAds.First />` / `<InArticleAds.Second />` / `<InArticleAds.Third />`: These are used for monetization. Follow existing patterns for placement if asked to insert them. Requires import: `import { InArticleAds } from "../components/ads/in-article-ads.tsx";`
