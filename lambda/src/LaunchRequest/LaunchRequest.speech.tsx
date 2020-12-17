/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'

export class LaunchRequestScript extends SpeechScriptJSX {

    speech() {
        return (
            <speak><p>ベナトン情報へようこそ！ベナトンの最新情報を聞くことができます。何の情報を知りたいですか？</p></speak>
        )
    }

    reprompt() {
        return (
            <speak><p>ベナトン情報へようこそ！ベナトンの最新情報を聞くことができます。何の情報を知りたいですか？</p></speak>
        )
    }

}
