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
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  async animaciones() {
    this.loadScript('assets/js/jquery-2.1.3.min.js');
    this.loadScript('assets/js/modernizr.custom.js');
    this.loadScript('assets/js/animating.js');
    this.loadScript('assets/js/imagesloaded.pkgd.min.js');
    this.loadScript('assets/js/perfect-scrollbar.min.js');
    this.loadScript('assets/js/jquery.shuffle.min.js');
    this.loadScript('assets/js/masonry.pkgd.min.js');
    this.loadScript('assets/js/owl.carousel.min.js');
    this.loadScript('assets/js/jquery.magnific-popup.min.js');
    this.loadScript('assets/js/validator.js');
    this.loadScript('assets/js/main.js');
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
