import {ShareData} from "../../Entity/share-data";
import {Template} from "../template";

export class ShareModal extends Template  {
  constructor(private readonly data: ShareData) {
    super();
  }

  public render = (): Node => {
    const link = encodeURIComponent(this.data.url);
    const text = encodeURIComponent(`${this.data.text}`);
    const fullText = `${text}%20${link}`;

    return this.htmlToNode(`<div class="modal">
      <span id="btn-close"></span>
      <h2>Share</h2>
      <div class="wrapper-share-icons">
        <a id="btn-share-facebook" class="btn-share" href="https://www.facebook.com/sharer/sharer.php?u=${link}" target="_blank"><span class="sr-only">Share on Facebook</span></a>
        <a id="btn-share-x" class="btn-share" href="https://twitter.com/intent/tweet?text=${fullText}" target="_blank"><span class="sr-only">Share on X</span></a>
        <a id="btn-share-reddit" class="btn-share" href="https://reddit.com/submit?url=${link}&title=${text}" target="_blank"><span class="sr-only">Share on Reddit</span></a>
        <a id="btn-share-whatsapp" class="btn-share" href="https://web.whatsapp.com/send?text=${fullText}" target="_blank"><span class="sr-only">Share on Whatsapp</span></a>
      </div>
      <hr />
      <div>
        <div id="copy-text">
          <textarea>${this.data.text} ${this.data.url}</textarea>
          <button id="btn-copy">Copy</button>
        </div>
      </div>
    </div>`);
 }

 private close = (): void => {
    document.querySelector('.modal').remove();
 }

  public afterInsert = (): void => {
    const textArea = document.querySelector('.modal textarea') as HTMLTextAreaElement;

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.close();
      }
    });

    document.querySelector('#btn-close').addEventListener('click', this.close);
    document.querySelector('#btn-copy').addEventListener('click', function() {
      const btnText = this.innerText;

      navigator.clipboard.writeText(textArea.value).then(() => {
        this.innerText = 'Copied!';

        setTimeout(() => {
          this.innerText = btnText;
        }, 2000);
      });
    });

    setTimeout(() => {
      textArea.style.height = (textArea.scrollHeight - 20) + 'px';
    }, 100);
  }

}
