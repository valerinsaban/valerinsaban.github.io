import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document
  ) { 
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  animaciones() {
    this.loadScript('assets/js/plugins.min.js');
    this.loadScript('assets/js/common.js');
    
    this.removeScript('assets/js/plugins.min.js');
    this.removeScript('assets/js/common.js');
  }

  loadScript(url: string) {
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    s.text = ``;
    this.renderer.appendChild(this._document.body, s);
  }

  removeScript(url: string) {
    this.renderer.removeChild(this._document.body, this._document.querySelector(`script[src="${url}"]`));
  }

}
