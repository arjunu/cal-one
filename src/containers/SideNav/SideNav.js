import React from 'react';
import * as styles from './SideNav.css';

export default class SideNav extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <section className="side-nav js-side-nav">
            <div className="side-nav__content js-side-nav-content">

                <div className="side-nav__header">
                    <h1 className="side-nav__title">Voice Memos</h1>
                </div>

                <div className="side-nav__body">
                    <button tabIndex="-1" className='side-nav__delete-memos js-delete-memos'>Delete all memos</button>
                    <a tabIndex="-1" target="_blank" href="https://aerotwist.com/blog/voice-memos/"
                       className='side-nav__blog-post'>See the blog post</a>
                    <a tabIndex="-1" target="_blank" href="https://github.com/GoogleChrome/voice-memos/issues"
                       className='side-nav__file-bug-report'>File a bug report</a>
                </div>

                <div className="side-nav__version">Version @VERSION@</div>
            </div>
        </section>;
    }
}

