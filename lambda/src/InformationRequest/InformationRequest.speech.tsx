/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'

export interface IData {
    title: string;
    body: string;
}

export class InformationRequestScript extends SpeechScriptJSX {
    private data: string = '';

    setData(data: IData[]) {
        this.data = data.map(item => {
            return `「${item.title.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}」についてご案内します。${item.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}`
        }).join('')
    }

    speech() {
        return (
            <speak><p>{this.data}</p></speak>
        )
    }

    reprompt() {
        return (
          <speak><p>{this.data}</p></speak>
        )
    }

}
