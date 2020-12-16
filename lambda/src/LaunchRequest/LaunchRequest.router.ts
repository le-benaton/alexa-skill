import { Router } from "@talkyjs/core";

import { LaunchRequestScript } from './LaunchRequest.speech'
import axios from 'axios';
import { IData } from './LaunchRequest.speech';

const getInformation = async () => {
    const data = await axios.get('https://www.benaton.net/api/news.json');
    return data;
}

export const LaunchRequestRouter: Router = {
    requestType: "LaunchRequest",

    handler: async (handlerInput) => {
        const { data } = await getInformation();

        const script = new LaunchRequestScript(handlerInput)
        script.setData(data as IData[]);
        return script
            .createResponseBuilder()
            .getResponse();
    }
}

export default LaunchRequestRouter
