/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'
import axios from 'axios';

export interface IData {
    title: string;
    body: string;
}

export type IInformationType = 'NEWS' | 'HOLIDAY'

export const getInformation = async () => {
    const data = await axios.get('https://www.benaton.net/api/news.json');
    return data;
}

const holiday = [
  "おやすみ",
  "やすみ",
  "定休日"
];

export class InformationRequestScript extends SpeechScriptJSX {
    private data: string = '';

    setData(data: IData[], informationType: IInformationType) {
        this.data = data
          .filter(item => {
              /**
               * ベナトンの更新者が title につける値
               * https://www.benaton.net/
               */
              const isHoliday = item.title.includes('おやすみ') || item.title.includes('定休日') || item.title.includes('お休み');
              return holiday.includes(informationType) ? isHoliday : !isHoliday;
          })
          .map(item => {
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
