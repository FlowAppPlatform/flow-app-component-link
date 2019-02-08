import React from 'react';
import AppComponent from 'flow-app-component';

// Link Button Canvas Styles
import './css/theme/default.css';

class LinkButtonComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for link button.',
          properties: [
            {
              id: 'text',
              name: 'Link Button',
              type: 'text',
              options: {},
              data: null,
            },
            {
              id: 'page',
              name: 'Select Page',
              type: 'select-page',
              options: {},
              data: null,
            },
          ],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the link button',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/link-button-component.png',
      name: 'Link',
      componentType: 'link',
      parent: null,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    const elemProps = this.getElementProps();
    elemProps.style = this.getDefaultStyle() || {};
    const graphId = this.getPropertyData('event');
    return (
      <button 
        type="button" 
        className="button-component" 
        aria-busy="false"
        onClick={this.getElementProps().onEvent(graphId)}
      >
        <span className="button-text">
          {this.getPropertyData('text') || 'Default Button Text'}
        </span>
      </button>
    );
  }
}

export default LinkButtonComponent;
