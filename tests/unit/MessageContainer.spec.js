import MessageContainer from "@/components/MessageContainer";
import {mount} from "@vue/test-utils";

describe('MessageContainer', () => {
    it('Wraps MessageDisplay component', () => {
        //Arrange
        let wrapper = mount(MessageContainer, {
            stubs: {
                MessageDisplay: {
                    template: `<p data-testid="message">Hello from the other side</p>`
                }
            }
        })
        //Assert
        let actualMessage = wrapper.find('[data-testid="message"]').element.textContent
        expect(actualMessage).toEqual('Hello from the other side')
    })
})