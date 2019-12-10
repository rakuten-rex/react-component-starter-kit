/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
import React from 'react';
import { bool, shape, func } from 'prop-types';
import { STORY_CHANGED } from '@storybook/core-events';
// import { languages, highlight } from 'prismjs/components/prism-core';
// import Prism from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-markup';
// import 'prismjs/themes/prism.css';
import { languages, highlight } from 'prismjs';
import pretty from 'pretty';

export default class InspectHtml extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      html: '',
    };
    this.onAddHtml = this.onAddHtml.bind(this);
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  componentDidMount() {
    const { api } = this.props;
    this.onChannelActions();

    api.on(STORY_CHANGED, this.onStoryChange);
  }

  componentDidUpdate(prevProps) {
    const { active } = this.props;

    if (active !== prevProps.active) {
      if (active) {
        this.onChannelActions();
      }
    }
  }

  componentWillUnmount() {
    const { channel, api } = this.props;
    api.off(STORY_CHANGED, this.onStoryChange);
    channel.removeListener('storybook/inspecthtml/add_html', this.onAddHtml);
  }

  onChannelActions() {
    const { channel } = this.props;

    channel.on('storybook/inspecthtml/add_html', html => {
      const doubleQuotesPatch = html.replace(/&quot;/gi, '"');
      const cleanHtml = doubleQuotesPatch;

      this.onAddHtml(cleanHtml);
    });
  }

  onStoryChange() {
    this.onAddHtml('');
  }

  onAddHtml(html) {
    const formatedHtml = pretty(html);
    const highlightHtml = highlight(
      formatedHtml,
      // eslint-disable-next-line no-undef
      languages.markup,
      'html'
    );

    this.setState({
      html: highlightHtml,
    });
  }

  render() {
    const { active } = this.props;
    const { html } = this.state;

    return (
      <Panel
        className="addon-inspecthtml-container"
        html={html}
        active={active}
      />
    );
  }
}

InspectHtml.propTypes = {
  active: bool.isRequired,
  channel: shape({
    on: func,
    removeListener: func,
  }).isRequired,
  api: shape({
    onStory: func,
  }).isRequired,
};

// eslint-disable-next-line react/prop-types
function Panel({ html, active }) {
  if (active) {
    return (
      <div style={{ paddingLeft: '20px' }}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </div>
    );
  }

  return null;
}
