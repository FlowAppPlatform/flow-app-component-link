import React from 'react';
import AppComponent from 'flow-app-component';

// Link Button Canvas Styles
import './css/theme/default.css';

// Programmatically generated styles
import { 
  alignContainer,
  containerWidth,
  aligntext,
} from './style';

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
              id: 'align-container',
              name: 'Align Container',
              type: 'position', 
              options: ['left', 'center', 'right'],
              data: null,
            },
            {
              id: 'container-width',
              name: 'Width',
              type: 'dropdown',
              options: {
                options: [
                  { label: '10%', value: 'ten' },
                  { label: '20%', value: 'twenty' },
                  { label: '30%', value: 'thirty'},
                  { label: '40%', value: 'forty' },
                  { label: '50%', value: 'fifty' },
                  { label: '60%', value: 'sixty'},
                  { label: '70%', value: 'seventy' },
                  { label: '80%', value: 'eighty' },
                  { label: '90%', value: 'ninety'},
                  { label: '100%', value: 'full-page'}
                ]
              },
              data: null,
            },
            {
              id: 'align-text',
              name: 'Align Text',
              type: 'align-text', 
              options: ['left', 'right', 'center'],
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
    const defaultWidth = { width: '100%' }
    elemProps.style = Object.assign(this.getDefaultStyle() || {}, {
      ...this.getPropertyData('align-container') 
        && alignContainer(this.getPropertyData('align-container')),
      ...this.getPropertyData('container-width')
        && containerWidth(this.getPropertyData('container-width').value) || defaultWidth,
      ...this.getPropertyData('align-text')
        && aligntext(this.getPropertyData('align-text')) || 'center',
    })
    return (
      <button
        type="button"
        className="button-component"
        style={elemProps.style}
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
