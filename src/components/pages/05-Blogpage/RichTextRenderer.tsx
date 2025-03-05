import slugify from '../../../lib/helpers';
import { RichTextContent } from '../../../lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { FC } from 'react';
import CodeHighlighter from './CodeHighlighter';
import OptimizedImage from '../../../components/features/OptimizedImage';
import Title from '../../../components/shared/Title';


interface RichTextRendererProps extends React.HTMLProps<HTMLDivElement> {
  richTextContent: RichTextContent;
}

const RichTextRenderer: FC<RichTextRendererProps> = ({
  richTextContent,
  ...props
}) => {
  return (
    <div className={props.className}>
      {documentToReactComponents(
        richTextContent.json,
        renderOptions(richTextContent.links)
      )}
    </div>
  );
};

export default RichTextRenderer;

function renderOptions(links: any) {
  const assetMap = new Map();
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  return {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <span className="font-medium">{text}</span>,
      [MARKS.CODE]: (text: any) => <CodeHighlighter>{text}</CodeHighlighter>,
      [MARKS.ITALIC]: (text: any) => <span className="italic">{text}</span>,
      [MARKS.SUBSCRIPT]: (text: any) => (
        <span className="-mb-2 text-xs text-muted">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="my-1 md:my-2 [&>pre]:my-0">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <Title
          as="h2"
          className="mb-2 mt-8 text-3xl md:mb-4 md:mt-8"
          id={slugify(children[0])}
        >
          {children}
        </Title>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <Title as="h3" className="mb-1.5 mt-1.5 text-xl md:mb-3 md:mt-3">
          {children}
        </Title>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <Title as="h4" className="mb-1 mt-1 text-base md:mb-2 md:mt-2">
          {children}
        </Title>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <p className="mb-2 border-l-4 border-dark pl-2 text-lg font-medium md:mb-4 [&>p]:mb-0">
          {children}
        </p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          className="font-medium text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="mb-2 ml-4 list-disc md:mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol
          className="mb-2 ml-2 list-decimal md:mb-4 md:ml-4
        "
        >
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => 
      <li className="mb-2 ml-2 list-disc md:mb-4 md:ml-4
      ">
        {children}
      </li>,

    [BLOCKS.TABLE]: (node:any, children:any) => (
      <table className="w-full border-collapse border" suppressHydrationWarning>
        <tbody className='h-fit'>
        {children}
        </tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node:any, children:any) => (
      <tr className="even:bg-gray-100 h-auto" suppressHydrationWarning>{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node:any, children:any) => (
      <td className="px-2" suppressHydrationWarning>{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node:any, children:any) => (
      <th className="text-start px-2 font-medium bg-slate-200" suppressHydrationWarning>{children}</th>
    ),

      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <div className="mb-4 mt-4 md:mb-8 md:mt-8">
            <OptimizedImage
              src={asset.url}
              alt={asset.title}
            />
          </div>
        );
      },
    },
  };
}
