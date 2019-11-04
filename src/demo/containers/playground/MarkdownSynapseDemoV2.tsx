import * as React from 'react'
import MarkdownSynapseV2, {
  MarkdownSynapseProps,
} from '../../../lib/containers/MarkdownSynapseV2'

type State = {
  index: number
  markdownPropsArray: MarkdownSynapseProps[]
}

export default class MarkdownSynapseDemo extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      index: 2,
      markdownPropsArray: [
        {
          // footnotes with html
          ownerId: 'syn21097753',
        },
        {
          // with details tag
          ownerId: 'syn12666371',
          wikiId: '585317',
        },
        {
          //  with references
          ownerId: 'syn17100797',
          wikiId: '587923',
        },
        {
          // with  toc
          ownerId: 'syn17100797',
          wikiId: '587923',
        },
        {
          ownerId: 'syn18142975',
        },
        {
          // nested link
          ownerId: 'syn12666371',
          wikiId: '595383',
        },
      ],
    }
  }
  render() {
    const { index, markdownPropsArray } = this.state
    const props = markdownPropsArray[index]
    return (
      <div className="container">
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 0 })
          }}
        >
          Footnotes with html
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 1 })
          }}
        >
          Details tag
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 2 })
          }}
        >
          References
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 3 })
          }}
        >
          bookmarks
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 4 })
          }}
        >
          lego man
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            this.setState({ index: 5 })
          }}
        >
          Show nested anchor
        </button>
        {/* footnotes with html */}
        <MarkdownSynapseV2 {...props} />
      </div>
    )
  }
}
