import { Router } from "@talkyjs/core";
import { getSlotValue } from 'ask-sdk-core';

import axios from 'axios';
import { IData, getInformation, IInformationType, InformationRequestScript } from './InformationRequest.speech';

export const InformationRequestRouter: Router = {
    requestType: "IntentRequest",
    intentName: "InformationIntent",

    handler: async (handlerInput) => {
        const informationType = getSlotValue(handlerInput.requestEnvelope, 'InformationType') as IInformationType;
        console.log({
            informationType,
            request: handlerInput.requestEnvelope,
        });
        const { data } = await getInformation();

        const script = new InformationRequestScript(handlerInput)

        script.setData(data as IData[], informationType);
        return script
            .createResponseBuilder()
            .withShouldEndSession(true)
            .getResponse();
    }
}

export default InformationRequestRouter
