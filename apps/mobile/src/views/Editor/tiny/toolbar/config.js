import {
  editor_font_size,
  font_names,
  orderedListStyles,
  unorderedListStyles,
  editor_colors,
} from './constants';

export const TOOLBAR_CONFIG = [
  [
    {
      format: 'bold',
      type: 'format',
      fullname: 'Bold',
    },
    {
      format: 'italic',
      type: 'format',
      fullname: 'Italic',
    },
    {
      format: 'strikethrough',
      type: 'format',
      fullname: 'Strikethrough',
    },
    {
      format: 'underline',
      type: 'format',
      fullname: 'Underline',
    },
  ],

  [
    {
      format: 'align',
      type: 'tooltip',
      valueIcon: 'alignleft',
      fullname: 'Text Alignment',
      group: [
        {
          format: 'alignleft',
          type: 'formatLine',
          premium: true,
          fullname: 'Align Left',
        },
        {
          format: 'aligncenter',
          type: 'formatLine',
          premium: true,
          fullname: 'Align Center',
        },
        {
          format: 'alignright',
          type: 'formatLine',
          premium: true,
          fullname: 'Align Right',
        },
        {
          format: 'alignjustify',
          type: 'formatLine',
          premium: true,
          fullname: 'Justify',
        },
      ],
    },
  ],
  [
    {
      format: 'ol',
      type: 'tooltip',
      fullname: 'Ordered List',
      group: orderedListStyles.map((style) => {
        return {
          format: 'ol',
          formatValue: style,
          fullname: style,
          premium: true,
        };
      }),
    },

    {
      format: 'ul',
      type: 'tooltip',
      fullname: 'Unordered List',
      group: unorderedListStyles.map((style) => {
        return {
          format: 'ul',
          formatValue: style === 'default' ? 'disc' : style,
          fullname: style,
          premium: true,
        };
      }),
    },
    {
      format: 'cl',
      type: 'format',
      fullname: 'Checklist',
      premium: true,
    },
  ],
  [
    {
      format: 'fontsize',
      type: 'tooltip',
      valueIcon: 'fontsize',
      fullname: 'Font Size',
      premium: true,
      group: editor_font_size.map((item) => {
        return {
          format: 'fontsize',
          formatValue: item,
          fullname: item,
        };
      }),
    },
    {
      format: 'fontname',
      type: 'tooltip',
      textValue: 'System Font',
      fullname: 'Font Family',
      premium: true,
      group: font_names.map((item) => {
        return {
          format: 'fontname',
          formatValue: item.value,
          fullname: item.value,
          text: item.name,
        };
      }),
    },
    {
      format: 'hilitecolor',
      type: 'tooltip',
      fullname: 'Text Highlight Color',
      groupType: 'hilitecolor',
      group: editor_colors.map((item) => {
        return {
          format: 'hilitecolor',
          formatValue: item,
          premium: true,
          fullname: item,
        };
      }),
    },
    {
      format: 'forecolor',
      type: 'tooltip',
      fullname: 'Text Color',
      groupType: 'forecolor',
      group: editor_colors.map((item) => {
        return {
          format: 'forecolor',
          formatValue: item,
          fullname: item,
          premium: true,
        };
      }),
    },
  ],
  [
    {
      format: 'header',
      type: 'tooltip',
      valueIcon: 'header',
      textValue: 'Paragraph',
      fullname: 'Block',
      group: [
        {
          format: 'p',
          text: 'Paragraph',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Paragraph',
        },
        {
          format: 'h2',
          text: 'Heading 2',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Heading 2',
        },
        {
          format: 'h3',
          text: 'Heading 3',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Heading 3',
        },
        {
          format: 'h4',
          text: 'Heading 4',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Heading 4',
        },
        {
          format: 'h5',
          text: 'Heading 5',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Heading 5',
        },
        {
          format: 'h6',
          text: 'Heading 6',
          type: 'format',
          showTitle: false,
          premium: true,
          fullname: 'Heading 6',
        },
      ],
    },
  ],

  [
    {
      format: 'blockquote',
      type: 'format',
      fullname: 'Quote',
    },
    {
      format: 'link',
      type: 'tooltip',
      groupType: 'link',
      fullname: 'Link',
      premium: true,
      group: [
        {
          format: 'link',
          type: 'format',
          fullname: 'Link',
        },
      ],
    },
    {
      format: 'code-block',
      type: 'formatLine',
      fullname: 'Code',
      premium: true,
    },
  ],
  [
    {
      format: 'image',
      type: 'format',
      fullname: 'Image',
      premium: true,
    },
    {
      format: 'video',
      type: 'format',
      groupType: 'video',
      fullname: 'Video',
      premium: true,
    },
  ],
  [
    {
      format: 'outdent',
      type: 'format',
      fullname: 'Outdent',
      premium: true,
    },
    {
      format: 'indent',
      type: 'format',
      premium: true,
      fullname: 'Indent',
    },

    {
      format: 'superscript',
      type: 'format',
      premium: true,
      fullname: 'Superscript',
    },
    {
      format: 'subscript',
      type: 'format',
      fullname: 'Subscript',
      premium: true,
    },
    {
      format: 'table',
      type: 'tooltip',
      fullname: 'Table',
      groupType: 'table',
    },
  ],
  [
    {
      format: 'ltr',
      type: 'format',
      fullname: 'Text Direction LTR',
    },
    {
      format: 'rtl',
      type: 'format',
      fullname: 'Text Direction RTL',
    },
  ],
  [
    {
      format: 'horizontal',
      type: 'format',
      fullname: 'Horizontal Rule',
    },

    {
      format: 'removeformat',
      type: 'format',
      fullname: 'Remove Formatting',
    },
  ],
];
