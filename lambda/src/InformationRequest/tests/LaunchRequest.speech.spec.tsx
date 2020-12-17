import { HandlerInputCreator } from '@ask-utils/test';
import { InformationRequestScript } from '../InformationRequest.speech'

describe('LaunchRequestScript', () => {

  it('should return false when given a not IntentRequest', async () => {
    const handlerInput = new HandlerInputCreator().createIntentRequest({
      name: "LaunchRequest",
      confirmationStatus: 'NONE'
    });
    const script = new InformationRequestScript(handlerInput);
    expect(script.createResponse()).toMatchSnapshot();
  });

});
