import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {
  
  @Prop() text: string;

  render() {
    return <button>{this.text}</button>;
  }
}
