import { Component, Element } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  // shadow: true,
})
export class MyComponent {
  @Element() host: HTMLElement;
  
  // /**
  //  * The first name
  //  */
  // @Prop() first: string;

  // /**
  //  * The middle name
  //  */
  // @Prop() middle: string;

  // /**
  //  * The last name
  //  */
  // @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  // render() {
  //   return <div>Hello, World! I'm {this.getText()}</div>;
  // }

  connectedCallback() {
    // @ts-ignore
    this.host.innerHTML = `<div>Stencil Component</div>`;
  }
}
