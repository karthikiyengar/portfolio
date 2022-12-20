import { remark } from 'remark'
import html from 'remark-html'
import remarkPrism from 'remark-prism'

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(remarkPrism, {
            plugins: [
                'autolinker',
                'command-line',
                'data-uri-highlight',
                'diff-highlight',
                'inline-color',
                'keep-markup',
                'line-numbers',
                'show-invisibles',
                'treeview',
            ],
        })
        .use(html, { sanitize: false })
        .process(markdown)
    return result.toString()
}