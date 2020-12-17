import { Router } from "@talkyjs/core";

import { InformationRequestScript } from './InformationRequest.speech'
import axios from 'axios';
import { IData } from './InformationRequest.speech';

const getInformation = async () => {
    const data = await axios.get('https://www.benaton.net/api/news.json');
    return data;
}

export const InformationRequestRouter: Router = {
    requestType: "IntentRequest",
    intentName: "InformationIntent",

    handler: async (handlerInput) => {
        const { data } = await getInformation();

        const script = new InformationRequestScript(handlerInput)
        script.setData(data as IData[]);
        return script
            .createResponseBuilder()
            .withShouldEndSession(true)
            .getResponse();
    }
}

export default InformationRequestRouter
