/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'

export class HelpIntentScript extends SpeechScriptJSX {
    speech() {
        return (
            <speak>
                <p>「お知らせ」と「定休日」のどちらかを指定してください</p>
            </speak>
        )
    }

    reprompt() {
        return (
            <speak>
                <p>How are you?</p>
            </speak>
        )
    }

}
