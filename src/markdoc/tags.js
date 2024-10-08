import { Box } from '@/components/Box'
import { Callout } from '@/components/Callout'
import CustomDisclosure from '@/components/CustomDisclosure'
import { LinkCard, QuickLink, QuickLinks } from '@/components/QuickLinks'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
    attributes: {
      width: { type: Number }
    }
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
      newTab: { type: Boolean },
    },
  },
  'link-card': {
    selfClosing: true,
    render: LinkCard,
    attributes: {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      href: { type: String },
      newTab: { type: Boolean }
    },
  },
  'custom-disclosure': {
    selfClosing: true,
    render: CustomDisclosure,
    attributes: {
      title: { type: String },
      description: { type: String },
    }
  },
  'box': {
    render: Box,
    attributes: {
      percent: { type: Number },
      label: { type: String },
    }
  }
}

export default tags
