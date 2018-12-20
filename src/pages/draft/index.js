import React from 'react';
import Markdown from 'react-markdown'
import Editor from '../../components/Edite/editor'
import CodeBlock from '../../components/Edite/code-block'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Header from './header'

const initialSource = `

`
const styles = (theme) => createStyles({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const footerStyles = (theme) => createStyles({
    footer: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        borderTop: '1px solid #ddd',
        width: '100%',
        boxSizing: 'border-box',
        height: 40,
        position: 'absolute',
        bottom: 0,

    }
})
const EditorFooter = (props) => {
    return (
        <div className={ props.classes.footer }>
            1
        </div>
    )
}
const EditorFooterWrapper = withStyles(footerStyles)(EditorFooter)

class Draft extends React.PureComponent {
    constructor(props) {
        super(props)
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
        this.state = {
            markdownSrc: initialSource,
            htmlMode: 'raw'
        }
    }

    handleMarkdownChange (evt) {
        this.setState({ markdownSrc: evt.target.value })
    }

    render () {
        return (
            <div className="draft">
                <Header />
                <div className="editor-pane">
                    <Editor value={ this.state.markdownSrc } onChange={ this.handleMarkdownChange } />
                    <EditorFooterWrapper />
                </div>

                <div className="result-pane">
                    <Markdown
                        className="result"
                        source={ this.state.markdownSrc }
                        renderers={ { code: CodeBlock } }
                    />
                    <EditorFooterWrapper />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Draft);
