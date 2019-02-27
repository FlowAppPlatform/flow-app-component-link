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
            {
              id: 'style',
              name: 'Align Text',
              type: 'dropdown', 
              options: {
                options: [{
                  label: 'Left',
                  value: 'left'
                },
                {
                  label: 'Right',
                  value: 'right'
                },
                {
                  label: 'Center',
                  value: 'center'
                }
              ]
              },
              data: null,
            },
          ],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the link button',
          properties: [
            {
              id: 'click',
              name: 'Click Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'load',
              name: 'Load Event',
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

  componentDidMount() {
    this.triggerGraphEvent('load')
  }

  triggerGraphEvent = (eventId) => {
    const graphId = this.getPropertyData(eventId);
    if (typeof this.getElementProps().onEvent === 'function') {
      this.getElementProps().onEvent(graphId)
    }
  }

  renderContent() {
    const elemProps = this.getElementProps();
    elemProps.style = this.getDefaultStyle() || {};
    return (
      <button
        type="button"
        className="button-component"
        style={
          {
            textAlign: this.getPropertyData('style') 
              ? this.getPropertyData('style').value 
              : 'center'
          }
        }
        aria-busy="false"
        onClick={() => this.triggerGraphEvent('click')}
        onMouseOver={() => this.triggerGraphEvent('hover')}
      >
        <span className="button-text">
          {this.getPropertyData('text') || 'Default Button Text'}
        </span>
      </button>
    );
  }
}

export default LinkButtonComponent;
